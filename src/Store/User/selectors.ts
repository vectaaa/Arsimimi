import type {RootState} from '../index';
export const getFirstName = (state: RootState) => {
  const splitArr = state.user.name.split(' ');
  return splitArr[0] || '';
};

export const getLastName = (state: RootState) => {
  const splitArr = state.user.name.split(' ');
  return splitArr[splitArr.length - 1] || '';
};

export const getDevices = (state: RootState) => state.user.devices;
// export const getIsSignedIn = (state: RootState) => state.user.
export const getGuardianMail = (state: RootState) => state.user.guardianEmail;
export const getMail = (state: RootState) => state.user.email;
