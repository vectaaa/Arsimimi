import React from 'react';
import { Pressable, PressableProps, ViewStyle } from 'react-native';
import {debounce} from 'lodash';

export type PressableOpacityProps = PressableProps & {
  testingSuffix: string;
  debounceWait?: number;
  activeOpacity?: number;
};

export const PressableOpacity = ({
  children,
  disabled,
  style,
  onPress,
  debounceWait = 500,
  activeOpacity = 0.4,
  testingSuffix,
  ...props
}: PressableOpacityProps) => {
  const debounceOnPress = debounce((e) => onPress?.(e), debounceWait, {
    leading: true,
    trailing: false,
  });

  return (
    <Pressable
      style={({ pressed }) => [{ opacity: pressed ? activeOpacity : 1 }, style as ViewStyle]}
      hitSlop={5}
      disabled={disabled}
      onPress={debounceOnPress}
      {...props}
      testID={testingSuffix}
      accessibilityLabel={testingSuffix}
    >
      {children}
    </Pressable>
  );
};
