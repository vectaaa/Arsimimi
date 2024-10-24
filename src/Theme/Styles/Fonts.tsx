import { StyleProp, TextStyle, StyleSheet } from 'react-native';

export const FontSize = {
  small: 12,
  regular: 14,
  medium: 18,
  large: 24,
  extraLarge: 36,
};

export type FontVariant = keyof typeof FontSize;

export const fontVariants: { [k in FontVariant]: StyleProp<TextStyle> } = StyleSheet.create({
  small: {
    fontSize: FontSize.small,
    lineHeight: 20,
  },
  regular: {
    fontSize: 14,
    lineHeight: 20,
  },
  medium: {
    fontSize: FontSize.medium,
    lineHeight: 24,
  },
  large: {
    fontSize: 24,
    lineHeight: 30,
  },
  extraLarge: {
    fontSize: FontSize.extraLarge,
    lineHeight: 44,
  },
});

export const fontAlignments = StyleSheet.create({
  textCenter: {
    textAlign: 'center',
  },
  textJustify: {
    textAlign: 'justify',
  },
  textLeft: {
    textAlign: 'left',
  },
  textRight: {
    textAlign: 'right',
  },
});
