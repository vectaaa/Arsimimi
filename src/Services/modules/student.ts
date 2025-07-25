import {ENDPOINTS} from '../../Constants/Endpoints';
import {rtkQueryService} from '../api';
import type * as Types from '../../Types/StudentService';
import {API_URL} from '../api';

console.log(API_URL, 'URL');
export const studentApi = rtkQueryService.injectEndpoints({
  endpoints: build => ({
    //mutation
    registrationInitiate: build.mutation<
      Types.RegistrationInitiateResponse,
      Types.RegistrationInitiateData
    >({
      query: body => {
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

    resendOtp: build.mutation<Types.ResendOtpResponse, Types.ResendOtpData>({
      query: body => ({
        url: ENDPOINTS.RESEND_OTP,
        method: 'POST',
        body,
      }),
    }),

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
  useResendOtpMutation,
  useRegistrationCompleteMutation,
} = studentApi;
