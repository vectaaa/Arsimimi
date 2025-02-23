import {default as PasswordHidden} from '../assets/Svg/clarity_eye-hide-solid.svg';
import {default as PasswordVisible} from '../assets/Svg/clarity_eye-line.svg';
import {default as Info} from '../assets/Svg/info.svg';
import {default as GoogleIcon} from '../assets/Svg/googleIcon.svg';
import {default as FacebookIcon} from '../assets/Svg/googleIcon.svg';
import {default as Checkmark} from '../assets/Svg/checkmark.svg';

export type Icon = keyof typeof Icons;

export const Icons = {
  Checkmark,
  PasswordHidden,
  PasswordVisible,
  Info,
  GoogleIcon,
  FacebookIcon,
};
