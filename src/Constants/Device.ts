import { getModel, getSystemVersion, getUniqueIdSync } from 'react-native-device-info';

import { ENV } from '../Constants/Env';

export const DEVICE = {
  UUID: ENV.DEVICE_ID ? ENV.DEVICE_ID : getUniqueIdSync(),
  MODEL: getModel(),
  NAME: getModel(),
  VERSION: getSystemVersion(),
};
