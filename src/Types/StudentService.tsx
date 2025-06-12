import {SelectedSecurityQuestion} from '@/Components/FormBuilder/SecurityQuestionsForm';
import {Account, ProfileImage} from './Account';
import {GenericResponse, ImageType} from './Common';
import {Device} from './Device';
import {BankTransaction, Transaction, TransactionType} from './Transaction';

// USED TYPES
export enum OtpType {
  PASSWORD_RESET = 'PASSWORD_RESET',
  REGISTRATION = 'USER_DEVICE_REGISTRATION',
  DEVICE_BIND_OTP = 'DEVICE_BIND_OTP',
  ACCOUNT_OPENING = 'ACCOUNT_OPENING',
}

export type ResendTargetedOtpData = {
  deviceId: string;
  institutionCD: string;
};
export type ResendResetPasswordOtpData = {
  accountNumber: string;
  institutionCD: string;
};

export type ResendOtpData = {
  institutionCD: string;
  otpType: OtpType;
  username: string;
  deviceId: string;
};

//Arsimimi types
export type RegistrationInitiateData = {
  email: string;
  password: string;
};
export type RegistrationInitiateResponse = GenericResponse & {
  data: {
    id: number;
    email: string;
  };
};

export type ValidateOtpData = {
  email: string;
  otp: string;
};
export type ValidateOtpResponse = GenericResponse & {
  data: {
    accessToken: string;
    email: string;
  };
};
//End of Arsimimi//

export type ExamType =
  | ' Primary School '
  | ' Junior Secondary School'
  | ' Senior Secondary School'
  | ' Professional Exam';
export type LearningGoal =
  | '15-20 mins daily'
  | '20-45 mins daily'
  | '1 hour daily'
  | 'More than 1 hour daily';

export type RegistrationCompleteData = {
  name: string;
  ageRange: string;
  guardianEmail: string;
  agreeToTerms: string;
  nameOfSchool: string;
  educationLevel: string;
  grade: string;
  examTypes: string[];
  goalDescription: string;
  learningGoals: string[];
  learningTime: string;
  canNotify: string;
};
export type RegistrationCompleteResponse = GenericResponse;

export type LoginLookupResponse = GenericResponse & {
  available: boolean;
};
export type LoginLookupData = {
  institutionCD: string;
  username: string;
};

export type UserData = {
  fullname: string;
  accountNumber: string;
  phoneNumber: string;
  email: string;
  bvn: string;
  lastLoginTime: string;
  custNo: string;
  mpinChangeRequired: boolean;
  tpinChangeRequired: boolean;
  myDevice: boolean;
  registeredDeviceCount: number;
  maxDeviceCountAllowed: number;
  deviceTied: boolean;
  transactionLimit: number;
  userTransactionLimit: number;
  signedIndemnity: boolean;
  devices: Device[];
  authID: string;
  profileImage: ProfileImage;
  transactional: boolean;
  kycLevel: number;
  mbppVersion: number;
  dateOfBirth: string;
  intstitutionKycLevel: number;
  acceptedTermsVersion: number;
  acceptedPrivacyVersion: number;
  localTxnDailyLimitAmount: number;
  localPinPerTransactionAmount: number;
  pinPerTransactionAmount: number;
  loginId: string;
};

export type LoginData = {
  channel: 'MOBILE';
  deviceId: string;
  deviceModel: string;
  institutionCD: string;
  latitude: string;
  longitude: string;
  loginID: string;
  mpin: string;
};

export type LoginResponse = GenericResponse &
  UserData & {
    accounts: Account[];
    sessionID: string;
  };

export type AccountsGetData = {accountNumber: string};
export type AccountsGetResponse = GenericResponse & {
  accounts: Account[];
  custNo: string;
  totalAvailableBalance: number;
};
// PRESET TYPES
export type GenericChangePinData = {
  tpin: string;
  newTPin: string;
  confirmTPin: string;
};

export type Location = {
  name: string;
  type: string;
  longitude: number;
  latitude: number;
  distance: number;
  address: string;
  branchCode: number;
};

export type QuickLoginData = {
  password: string;
  passwordType: string;
  deviceId: string;
  institutionCD: string;
};

export type ChangeTransactionPinData = GenericChangePinData;

export type ResetTransactionPinData = {
  newPin: string;
  authorizationString: string;
};

export type ChangePasswordData = {
  mpin: string;
  newMPin: string;
  confirmMPin: string;
};

export type InitiateResetPasswordData = {
  accountNumber: string;
  institutionCD: string;
};
export type InitiateResetPasswordResponse = GenericResponse & {
  phoneNumber: string;
};

export type CompleteResetPasswordData = {
  accountNumber: string;
  newPassword: string;
  otp: string;
  deviceId: string;
  question: string;
  answer: string;
  institutionCD: string;
};

export type QuickAccountDetailsData = {
  deviceId: string;
  institutionCD: string;
};
export type QuickAccountDetailsResponse = {
  code: number;
  accounts: Account[];
  totalAvailableBalance: number;
};

export type GetLocalTransactionsData = {
  startDate: string;
  endDate: string;
};
export type GetLocalTransactionsResponse = GenericResponse & {
  transactions: Transaction[];
};

export type GetBankTransactionsData = {
  accountNumber: string;
  startDate: string;
  endDate: string;
};
export type GetBankTransactionsResponse = GenericResponse & {
  transactions: BankTransaction[];
};

export type OpenAccountData = {
  bvn: string;
  institutionCD: string;
  dateOfBirth: string;
  phone: string;
  email: string;
  firstName: string;
  lastName: string;
  productCode: string;
  refNum: string;
  city: string;
  state: string;
  branchCode: string;
  gender: string;
  imageType: string;
  middleName: string;
  signatureType: ImageType;
  image: string;
  signature: string;
  homeAddress: string;
  identificationImage: string;
  otp: string;
  identificationType: ImageType;
  street: string;
};
export type OpenAccountResponse = GenericResponse & {
  accountNumber: string;
  custNo: string;
};

export type ValidatePinData = {accountNumber: string; transactionPin: string};

export type ResetPinData = {
  newTPin: string;
  question: string;
  answer: string;
};

export type InitiateOtpData = {
  deviceId: string;
  institutionCD: string;
  phoneNumber: string;
  otpType: OtpType;
};

export type BindDeviceData = {
  loginID: string;
  deviceId: string;
  newDeviceId: string;
  newDeviceModel: string;
  newDeviceName: string;
  otp: string;
  institutionCD: string;
  accountNumber: string;
  replace: boolean;
};

export type UnbindDeviceData = {
  deviceId: string;
  institutionCD: string;
  otp: string;
};

export type LocationsData = {
  deviceId: string;
  institutionCD: string;
  longitude: number;
  latitude: number;
};
export type LocationsResponse = GenericResponse & {
  locations: Location[];
};

export type ChangePasswordResponse = GenericResponse;

export type DeleteAccountResponse = GenericResponse;

export type DeleteAccountData = {
  reason: string;
  pin: string;
};

export type SecurityQuestion = {
  index: number;
  question: string;
};

export type SecurityQuestionsResponse = GenericResponse & {
  question1: string;
  question2: string;
  question3: string;
};

export type SecurityQuestionsData = {
  loginId: string;
  institutionCD: string;
  deviceId: string;
};

export type ValidateSecurityQuestionsData = {
  loginId: string;
  institutionCD: string;
  deviceId: string;
  question: string;
  answer: string;
};

export type ResetSecurityQuestionsData = {
  loginId: string;
  institutionCD: string;
  pin: string;
  question1: string;
  question2: string;
  question3: string;
  answer1: string;
  answer2: string;
  answer3: string;
};

export type GetDeviceResponse = GenericResponse & {
  devices: Device[];
};

export type SetTransactionLimitData = {
  accountNumber: string;
  newAmount: number;
  pin: string;
  currencyCode: string;
  singleTransactionAmount: number;
  transactionType: TransactionType;
};

export type ValidateBvnData = {
  bvn: string;
  institutionCD: string;
  dob: string;
  deviceId: string;
};

export type ValidateBvnResponse = GenericResponse & {
  firstName: string;
  lastName: string;
  otherName: string;
  phoneNumber: string;
  email: string;
  bvn: string;
  dateOfBirth: string;
  image: string;
  identificationNumber: string;
  kycLevel: string;
  responseCode: string;
  responseMessage: string;
  gender: string;
  address: string;
};

export type CompleteAutoData = {
  deviceId: string;
  institutionCD: string;
  longitude: string;
  latitude: string;
  deviceModel: string;
  otp: string;
  onboardMode: string;
  mpin: string;
  transactionPin: string;
  deviceName: string;
  bvn: string;
  username: string;
  securityQuestions: {
    question1: string;
    question2: string;
    question3: string;
    answer1: string;
    answer2: string;
    answer3: string;
  };
};

export type ValidateExistingUserData = {
  deviceId: string;
  institutionCD: string;
  userName: string;
  bvn: string;
};
export type ValidateExistingUserResponse = GenericResponse & {
  firstName: string;
  lastName: string;
  otherName: string;
  phoneNumber: string;
  email: string;
  bvn: string;
  dateOfBirth: string;
  image: string;
  identificationNumber: string;
  kycLevel: string;
  responseCode: string;
  responseMessage: string;
  gender: string;
  address: string;
  primaryAccountNumber: string;
};
export type CompleteExistingUserRegistrationData = {
  mpin: string;
  deviceId: string;
  deviceName: string;
  model: string;
  transactionPin: string;
  institutionCD: string;
  bvn: string;
  otp: string;
  username: string;
  securityQuestions: {
    question1: string;
    question2: string;
    question3: string;
    answer1: string;
    answer2: string;
    answer3: string;
  };
};
