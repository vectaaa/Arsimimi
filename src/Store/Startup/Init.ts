import {
  buildAsyncActions,
  buildAsyncReducers,
  buildAsyncState,
} from '@thecodingmachine/redux-toolkit-wrapper';

import {navigateAndSimpleReset} from '../../navigation/Root';

export default {
  initialState: buildAsyncState(),
  action: buildAsyncActions('startup/init', async () => {
    // Remove it, or keep it if you want display a beautiful splash screen ;)
    await new Promise(resolve => setTimeout(resolve, 1000));
    // Here we load the user 1 for example, but you can for example load the connected user

    // Navigate and reset to the main navigator
    navigateAndSimpleReset('Main');
  }),
  reducers: buildAsyncReducers({itemKey: null}), // We do not want to modify some item by default
};
