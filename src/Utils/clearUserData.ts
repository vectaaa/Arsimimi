import {rtkQueryService} from '../Services/api';
import {store} from '../Store';
// import {resetCatalogsSlice} from '../Store/Catalogs/catalogsSlice';
import {resetUserSlice} from '../Store/User/userSlice';

import {removeSessionID} from './storage/authStorage';

export const clearRTKQueryCache = () => {
  store.dispatch(rtkQueryService.util.resetApiState());
};

export const clearUserData = async () => {
  await removeSessionID();
  store.dispatch(resetUserSlice());
  // store.dispatch(resetCatalogsSlice());
  clearRTKQueryCache();
};
