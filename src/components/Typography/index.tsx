import React from 'react';
import { Text, StyleSheet, TextProps, TextStyle, StyleProp, ColorValue } from 'react-native';
import { COLORS } from '../../Theme/Colors';
import { useScaling } from '../../Hooks/useScaling';

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
  const { scaleHorizontal } = useScaling();

  const getFontFamily = () => {
    // prettier-ignore
    switch (weight) {
      case '100': return `Swiss721BT-Thin${italic ? 'Italic' : ''}`;
      case '300': return `Swiss721BT-Light${italic ? 'Italic' : ''}`;
      case '400': return `Swiss721BT-${italic ? 'Italic' : 'Roman'}`;
      case '500': return `Swiss721BT-Medium${italic ? 'Italic' : ''}`;
      case '700': return `Swiss721BT-Bold${italic ? 'Italic' : ''}`;
      case '800': return `Swiss721BT-Heavy${italic ? 'Italic' : ''}`;
      case '900': return `Swiss721BT-Black${italic ? 'Italic' : ''}`;
      default: return 'Swiss721BT-Roman';
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
        !!color && { color },
        style,
      ]}
      {...restNativeProps}
      testID={testingSuffix}
      accessibilityLabel={testingSuffix}
    >
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
