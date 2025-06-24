import {ENDPOINTS} from '../../Constants/Endpoints';
import {REQUESTS} from '../../Constants/Requests';
import {rtkQueryService} from '../api';
import {GenericResponse} from '../../Types/Common';
import {toUpperFirstSign} from '../../Utils/formatters';
import type * as Types from '../../Types/StudentService';
import { ENV } from '../../Constants/Env';


console.log(ENV.API_URL, 'URL')
export const studentApi = rtkQueryService.injectEndpoints({
  endpoints: build => ({
    //mutation
    registrationInitiate: build.mutation<
      Types.RegistrationInitiateResponse,
      Types.RegistrationInitiateData
    >({
      query: body => {
        const fullUrl = `${ENV.API_URL}${ENDPOINTS.REGISTER_INITIATE}`;
        console.log('[RegistrationInitiate] Request URL:', fullUrl);
        console.log('[RegistrationInitiate] Request Body:', body);
        return {
          url: ENDPOINTS.REGISTER_INITIATE,
          method: 'POST',
          body,
        };
      },
    }),

    validateOtp: build.mutation<
      Types.ValidateOtpResponse,
      Types.ValidateOtpData
    >({
      query: body => ({
        url: ENDPOINTS.VALIDATE_OTP,
        method: 'POST',
        body,
      }),
    }),

    // resendOtp: build.mutation<>({
    //   query: body => ({
    //     url: ENDPOINTS.
    //   }),
    // }),

    registrationComplete: build.mutation<
      Types.RegistrationCompleteResponse,
      Types.RegistrationCompleteData
    >({
      query: body => ({
        url: ENDPOINTS.CREATE_USER,
        methods: 'POST',
        body,
      }),
    }),
  }),
  overrideExisting: false,
});

export const {
  //mutation
  useRegistrationInitiateMutation,
  useValidateOtpMutation,
  useRegistrationCompleteMutation,
} = studentApi;
