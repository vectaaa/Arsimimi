import dotenvParseVariables from 'dotenv-parse-variables';
import {Config} from 'react-native-config';

type Env = {
  ENV: string;
  API_URL: any;
  DEVICE_ID: string;
  TIMEOUT_FOREGROUND_SEC: number;
  TIMEOUT_BACKGROUND_SEC: number;
};

export const getEnv = (): Env => {
  const ENV = Config.ENV;
  const API_URL = Config.API_URL;
  const DEVICE_ID = Config.DEVICE_ID;
  const TIMEOUT_FOREGROUND_SEC = Config.TIMEOUT_FOREGROUND_SEC;
  const TIMEOUT_BACKGROUND_SEC = Config.TIMEOUT_BACKGROUND_SEC;
  const HIDE_SPLASH_GIF = Config.HIDE_SPLASH_GIF;
  /* eslint-enable @typescript-eslint/no-unused-vars */

  return dotenvParseVariables(Config as {[key: string]: string}) as Env;
};
console.log('Raw API_URL:', Config.API_URL);
console.log('Before parsing:', Config);
export const ENV = getEnv();
