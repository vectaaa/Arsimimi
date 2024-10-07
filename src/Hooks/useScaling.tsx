import { GLOBALS } from '../Constants/Globals';
import { useWindowDimensions } from 'react-native';

type ScalingOptions = {
  factor?: number;
  min?: number;
  max?: number;
};

const BASE_WIDTH = 375;
const BASE_HEIGHT = 812;

export function useScaling() {
  const {
    width: windowWidth,
    height: windowHeight,
    fontScale,
    scale: pixelRatio,
  } = useWindowDimensions();

  const minMax = (size: number, min: number, max: number) => {
    let back = size;
    if (size < min) back = min;
    if (size > max) back = max;
    return back;
  };

  // horizontal scaling - use for horizontal spacing or when dealing with spacing in all directions to keep same ratio
  const scaleHorizontal = (
    size: number,
    { factor = 1, min, max }: ScalingOptions = { factor: 1, min: undefined, max: undefined }
  ) => {
    const newSize = Math.round(size + ((windowWidth / BASE_WIDTH) * size - size) * factor);
    return minMax(newSize, min || newSize, max || newSize);
  };
  const scaleDownHorizontal = (
    size: number,
    { factor = 1, min }: Omit<ScalingOptions, 'max'> = { factor: 1, min: undefined }
  ) => scaleHorizontal(size, { factor, min, max: size });
  const scaleUpHorizontal = (
    size: number,
    { factor = 1, max }: Omit<ScalingOptions, 'min'> = { factor: 1, max: undefined }
  ) => scaleHorizontal(size, { factor, min: size, max });

  // vertical scaling - use for vertical spacing
  const scaleVertical = (
    size: number,
    { factor = 1, min, max }: ScalingOptions = { factor: 1, min: undefined, max: undefined }
  ) => {
    const newSize = Math.round(size + ((windowHeight / BASE_HEIGHT) * size - size) * factor);
    return minMax(newSize, min || newSize, max || newSize);
  };
  const scaleDownVertical = (
    size: number,
    { factor = 1, min }: Omit<ScalingOptions, 'max'> = { factor: 1, min: undefined }
  ) => scaleVertical(size, { factor, min, max: size });
  const scaleUpVertical = (
    size: number,
    { factor = 1, max }: Omit<ScalingOptions, 'min'> = { factor: 1, max: undefined }
  ) => scaleVertical(size, { factor, min: size, max });

  const scaleIconSize = (size: number | { width: number; height: number } = GLOBALS.ICON_SCALE) => {
    let width = 0;
    let height = 0;
    if (typeof size === 'number') {
      width = size;
      height = size;
    } else {
      width = size.width;
      height = size.height;
    }
    return {
      width: scaleHorizontal(width),
      height: scaleHorizontal(height),
    };
  };

  return {
    windowWidth,
    windowHeight,
    fontScale,
    pixelRatio,
    scaleHorizontal,
    scaleDownHorizontal,
    scaleUpHorizontal,
    scaleVertical,
    scaleDownVertical,
    scaleUpVertical,
    scaleIconSize,
  };
}
