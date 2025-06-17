import {
  configureStore,
  isRejectedWithValue,
  Middleware,
  MiddlewareAPI,
} from '@reduxjs/toolkit';
import EncryptedStorage from 'react-native-encrypted-storage';
import {combineReducers} from 'redux';
import {
  FLUSH,
  PAUSE,
  PERSIST,
  persistReducer,
  persistStore,
  PURGE,
  REGISTER,
  REHYDRATE,
} from 'redux-persist';
import autoMergeLevel2 from 'redux-persist/lib/stateReconciler/autoMergeLevel2';

import {REQUESTS} from '../Constants/Requests';
// Services
import {rtkQueryService} from '../Services/api';
// State
// import catalogsSlice from '@/Store/Catalogs/catalogsSlice';
import commonSlice, {addError} from '../Store/Common/commonSlice';
// import profileSlice from '../Store/Profile/profileSlice';
import startup from '../Store/Startup';
import userSlice from '../Store/User/userSlice';
import i18n from '../Translations';

import {ReactotronConfig} from '../../ReactotronConfig';

// Check if the default error popup should appear if a request returns an error
// If the error was due to session timeout it will always show the default popup
const shouldDisplayErrorPopup = (action: any) => {
  let isAuthenticationFailure = false;

  isAuthenticationFailure =
    action.payload.originalStatus === 500 &&
    JSON.parse(action.payload.data).message ===
      REQUESTS.SESSION_TIMEOUT_MESSAGE;

  // Add the RTK endpoint names here, if the request should not show the default error popup
  const requestsWithoutDefaultErrorPopup = [
    'localAccountLookup',
    'interAccountLookup',
    // 'transferLocal',
    // 'transferInter',
    // 'transferOwn',
    // 'validatePin',
  ];

  return (
    isAuthenticationFailure ||
    !requestsWithoutDefaultErrorPopup.includes(action?.meta?.arg?.endpointName)
  );
};

const rtkQueryErrorLogger: Middleware =
  (api: MiddlewareAPI) => next => action => {
    if (isRejectedWithValue(action)) {
      let errorMessage = i18n.t('errorLogger.defaultError');

      // @ts-expect-error
      if (action?.payload?.error) {
        // @ts-expect-error
        errorMessage = action?.payload?.error
          .replace('Error: ', '')
          .toLowerCase();
        // @ts-expect-error
        action.payload.error = errorMessage;
      }

      if (shouldDisplayErrorPopup(action)) api.dispatch(addError(errorMessage));
    }

    return next(action);
  };

const reducers = combineReducers({
  // State
  // When adding new slice add clear slice to clearUserData() except persistConfig
  startup,
  common: commonSlice,
  profile: profileSlice,
  catalogs: catalogsSlice,
  user: userSlice,
  // Services
  // When adding new service add it to services array inside clearRTKQueryCache()
  [rtkQueryService.reducerPath]: rtkQueryService.reducer,
});

const persistConfig = {
  key: 'root',
  storage: EncryptedStorage,
  whitelist: ['profile'],
  stateReconciler: autoMergeLevel2,
};

const persistedReducer = persistReducer<ReturnType<typeof reducers>>(
  persistConfig,
  reducers,
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware => {
    const middlewares = getDefaultMiddleware({
      serializableCheck:
        process.env.NODE_ENV !== 'test'
          ? {
              ignoredActions: [
                FLUSH,
                REHYDRATE,
                PAUSE,
                PERSIST,
                PURGE,
                REGISTER,
              ],
            }
          : false,
    }).concat([rtkQueryErrorLogger, rtkQueryService.middleware]);

    return middlewares;
  },
  enhancers: getDefaultEnhancers =>
    getDefaultEnhancers().concat(
      __DEV__ ? [ReactotronConfig.createEnhancer!()] : [],
    ),
});

const persistor = persistStore(store);

export {persistor, store};

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
