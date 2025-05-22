import { CommonActions } from '@react-navigation/native';

import { navigationRef } from '../navigation/Root';
import { store } from '@/Store';
import { setIsOpaqueLoaderVisible } from '@/Store/Common/commonSlice';
import { clearUserData } from '../Utils/clearUserData';
import { wait } from '../Utils/technical';

export const logout = async () => {
  store.dispatch(setIsOpaqueLoaderVisible(true));
  navigationRef.current?.dispatch(
    CommonActions.reset({
      routes: [{ name: 'Auth', params: { screen: 'Login', initial: false } }],
    }),
  );
  await clearUserData();
  await wait(500);
  store.dispatch(setIsOpaqueLoaderVisible(false));
};

export const profileDeleteLogout = async () => {
  navigationRef.current?.dispatch(
    CommonActions.reset({
      routes: [{ name: 'Auth', params: { screen: 'Onboarding', initial: false } }],
    }),
  );
  await clearUserData();
};
