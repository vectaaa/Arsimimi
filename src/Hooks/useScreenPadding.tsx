import {GLOBALS} from '../Constants/Globals';
import {useScaling} from '../Hooks/useScaling';

export function useScreenPadding() {
  const {scaleHorizontal} = useScaling();

  return scaleHorizontal(GLOBALS.SCREEN_PADDING, {
    max: GLOBALS.SCREEN_PADDING * 2,
  });
}
