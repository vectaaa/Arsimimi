import dotenvParseVariables from 'dotenv-parse-variables';
import {Config} from 'react-native-config';

type Env = {
  ENV: string;
  API_URL: string;
  DEVICE_ID: string;
  TIMEOUT_FOREGROUND_SEC: number;
  TIMEOUT_BACKGROUND_SEC: number;
};

export const ENV = dotenvParseVariables(
  Config as {[key: string]: string},
) as Env;

// console.log('Raw API_URL:', Config.API_URL);
// console.log('Before parsing:', Config);
