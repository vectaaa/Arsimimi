import {
  BaseQueryApi,
  createApi,
  FetchArgs,
  fetchBaseQuery,
} from '@reduxjs/toolkit/query/react';
import {Mutex} from 'async-mutex';
import i18next from 'i18next';

import {DEVICE} from '../Constants/Device';
import {ENDPOINTS} from '../Constants/Endpoints';
// import {ENV} from '../Constants/Env';
import {GLOBALS} from '../Constants/Globals';
import {REQUESTS} from '../Constants/Requests';
import {addRequest, removeRequest} from '../Store/Common/commonSlice';
import {getSessionID} from '../Utils/storage/authStorage';
import {logout} from '../Utils/logout';

export const API_URL = 'https://tima-service.onrender.com/tima-service/api/v1/';
const SPECIFIC_RESPONSE_CODE_URLS = [`${API_URL}${ENDPOINTS.LOGIN}`];
console.log(SPECIFIC_RESPONSE_CODE_URLS, 'rer');

const mutex = new Mutex();

const baseQuery = fetchBaseQuery({
  baseUrl: API_URL,
  prepareHeaders: async (headers, {getState, endpoint}) => {
    const sessionId = await getSessionID();

    sessionId && headers.set('sessionID', sessionId);

    headers.set('Accept', 'application/json');
    headers.set('Content-Type', 'application/json');
    headers.set('Accept-Language', i18next.language);
    headers.set('deviceID', DEVICE.UUID);
    headers.set('appVersion', GLOBALS.APP_VERSION);

    return headers;
  },
});

const responseHandler = (extraOptions: any) => async (response: Response) => {
  let result;

  try {
    result = await response?.json();
  } catch (error) {
    throw new Error(i18next.t('errorLogger.defaultError'));
  }

  if (!response.ok && result?.message === REQUESTS.SESSION_TIMEOUT_MESSAGE) {
    await logout();
    throw new Error(i18next.t('globals.sessionExpiredMessage'));
  }

  if (result?.error) {
    throw new Error(result.error);
  }

  if (response.status >= 200 && response.status < 300) {
    return result;
  }

  if (
    ((result?.code === 0 || result?.responseCode === 0) &&
      !SPECIFIC_RESPONSE_CODE_URLS.includes(response.url)) ||
    (response.url === `${API_URL}${ENDPOINTS.LOGIN}` && result?.code === 22) ||
    // can't use url, because same url can either require manual error handling or not
    (extraOptions && extraOptions[REQUESTS.MANUAL_ERROR_HANDLE])
  ) {
    return result;
  }

  throw new Error(result?.description);
};

const runQuery = async (
  newArgs: FetchArgs,
  api: BaseQueryApi,
  extraOptions: any,
) => {
  let result = null;
  if (extraOptions && extraOptions[REQUESTS.WITHOUT_LOADER]) {
    result = await baseQuery(newArgs, api, extraOptions);
  } else {
    const requestId = Math.random().toString();

    api.dispatch(addRequest(requestId));
    result = await baseQuery(newArgs, api, extraOptions);

    api.dispatch(removeRequest(requestId));
  }
  return result;
};

const baseQueryWithInterceptor = async (
  args: FetchArgs,
  api: BaseQueryApi,
  extraOptions: any,
) => {
  // wait until the mutex is available without locking it
  await mutex.waitForUnlock();

  const newArgs = {...args, responseHandler: responseHandler(extraOptions)};

  // checking whether the mutex is locked
  if (!mutex.isLocked()) {
    const release = await mutex.acquire();

    try {
      return await runQuery(newArgs, api, extraOptions);
    } finally {
      // release must be called once the mutex should be released again
      release();
    }
  } else {
    // wait until the mutex is available without locking it
    await mutex.waitForUnlock();

    // Turn this on to block subsequent requests if the user is not authorized
    // It's not enabled by default, as you still need to add the ENDPOINTS_WITHOUT_AUTH array
    // and maintain all requests without authentication there
    // But to prevent making unnecessary requests and maybe having Session Timeout pop up multiple times,
    // something like this could be used to work around it.
    //
    // const isAuthorized =
    //   !!(api.getState() as RootState).user.custNo ||
    //   REQUESTS.ENDPOINTS_WITHOUT_AUTH.includes(api.endpoint);
    // if (process.env.NODE_ENV !== 'test' && !isAuthorized) {
    //   // block the request if the user is not authorized
    //   console.warn(`The unauthorized request has been blocked, URL: ${newArgs.url}
    // If this endpoint doesn't require authorization, please add it to the list of endpoints without authorization in REQUESTS.ENDPOINTS_WITHOUT_AUTH array`);
    //   return { data: null };
    // }
    // return await baseQuery(newArgs, api, extraOptions);

    return await runQuery(newArgs, api, extraOptions);
  }
};

export const rtkQueryService = createApi({
  tagTypes: ['accountBalance'],
  reducerPath: 'rtkQueryService',
  baseQuery: baseQueryWithInterceptor,
  endpoints: () => ({}),
});
