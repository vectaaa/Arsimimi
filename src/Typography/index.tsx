import React from 'react';
import {
  Text,
  StyleSheet,
  TextProps,
  TextStyle,
  StyleProp,
  ColorValue,
} from 'react-native';
import {COLORS} from '../Theme/Colors';
import {useScaling} from '../Hooks/useScaling.tsx';

export type FontWeight =
  | '100' // Thin
  | '300' // Light
  | '400' // Regular
  | '500' // Medium
  | '700' // Bold
  | '800' // Heavy
  | '900'; // Black

export type TypographyProps = TextProps & {
  size?: number;
  weight?: FontWeight;
  italic?: boolean;
  uppercase?: boolean;
  capitalize?: boolean;
  color?: ColorValue;
  children?: string | Element | Element[] | React.ReactNode | React.ReactNode[];
  style?: StyleProp<TextStyle> | StyleProp<TextStyle>[];
  testingSuffix?: string;
};

export const Typography = ({
  size = 14,
  weight = '400',
  italic = false,
  uppercase,
  capitalize,
  children,
  color = COLORS.BLACK_NORMAL,
  style = {},
  testingSuffix,
  ...restNativeProps
}: TypographyProps) => {
  const {scaleHorizontal} = useScaling();

  const getFontFamily = () => {
    // prettier-ignore
    switch (weight) {
      case '100': return `georgia${italic ? 'georgiai' : ''}`;
      case '300': return `georgia${italic ? 'georgiai' : ''}`;
      case '400': return `georgia${italic ? 'georgiai' : ''}`;
      case '500': return `georgia${italic ? 'georgiai' : ''}`;
      case '700': return `georgiab${italic ? 'georgiai' : ''}`;
      case '800': return `georgia${italic ? 'georgiai' : ''}`;
      case '900': return `georgia${italic ? 'georgiai' : ''}`;
      default: return 'georgia';
    }
  };

  return (
    <Text
      style={[
        {
          fontSize: scaleHorizontal(size),
          lineHeight: scaleHorizontal(size * 1.2 + 4),
          fontFamily: getFontFamily(),
        },
        uppercase && styles.uppercase,
        capitalize && styles.capitalize,
        !!color && {color},
        style,
      ]}
      {...restNativeProps}
      testID={testingSuffix}
      accessibilityLabel={testingSuffix}>
      {children}
    </Text>
  );
};

const styles = StyleSheet.create({
  uppercase: {
    textTransform: 'uppercase',
  },
  capitalize: {
    textTransform: 'capitalize',
  },
});
