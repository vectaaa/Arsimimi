import React, { useRef } from 'react';
import { Animated, ColorValue, Easing, StyleSheet, View, ViewProps } from 'react-native';
import { Icons } from '../../Theme/Icons';
import { COLORS } from '../../Theme/Colors';

type Props = ViewProps & {
  isVisible?: boolean;
  color?: ColorValue;
  colorOuterCircle?: ColorValue;
  size?: number;
  hideLogo?: boolean;
};

export const LoadingSpinner = ({
  isVisible = true,
  color = COLORS.OLIVE_NORMAL,
  colorOuterCircle = COLORS.OLIVE_LIGHT,
  size = 32,
  hideLogo = false,
  style,
  ...props
}: Props) => {
  const spinValue = useRef(new Animated.Value(0)).current;

  Animated.loop(
    Animated.timing(spinValue, {
      toValue: 1,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true,
    })
  ).start();

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  return (
    <View>
      <View
        style={{
          height: size,
          width: size,
          borderWidth: size / 10,
          borderRadius: size / 2,
          borderColor: colorOuterCircle,
        }}
      >
        {!hideLogo && (
          <View style={styles.image}>
            <Icons.ThrivePlant width={size / 2} height={size / 2} />
          </View>
        )}
      </View>
      <Animated.View
        style={[
          style,
          styles.loader,
          { transform: [{ rotate: spin }] },
          !isVisible && styles.invisible,
        ]}
        {...props}
      >
        <Icons.Loader width={size} height={size} fill={color} />
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  invisible: {
    opacity: 0,
  },
  loader: {
    position: 'absolute',
  },
  image: {
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
  },
});
