import {default as PasswordHidden} from '../assets/Svg/clarity_eye-hide-solid.svg';
import {default as PasswordVisible} from '../assets/Svg/clarity_eye-line.svg';
import {default as Info} from '../assets/Svg/info.svg';
import {default as GoogleIcon} from '../assets/Svg/googleIcon.svg';
import {default as FacebookIcon} from '../assets/Svg/googleIcon.svg';
import {default as Checkmark} from '../assets/Svg/checkmark.svg';
import {default as HomeIcon} from '../assets/Svg/Home.svg';
import {default as CommunityIcon} from '../assets/Svg/Community.svg';
import {default as Settings} from '../assets/Svg/Settings.svg';
import {default as Activity} from '../assets/Svg/Activity.svg';
import {default as ArrowLeft} from '../assets/Svg/arrow-left.svg';
import {default as HelpIcon} from '../assets/Svg/Help.svg';

export type Icon = keyof typeof Icons;

export const Icons = {
  Checkmark,
  PasswordHidden,
  PasswordVisible,
  Info,
  GoogleIcon,
  FacebookIcon,
  HomeIcon,
  CommunityIcon,
  Settings,
  Activity,
  ArrowLeft,
  HelpIcon,
};
