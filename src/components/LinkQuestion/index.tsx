import React from 'react';
import { StyleProp, ColorValue, TextStyle } from 'react-native';
import { FontWeight, Typography } from '../../components/Typography';
import { styling } from '../../Theme/Styles/GlobalStyles';
import { COLORS } from '../../Theme/Colors';

type TLinkQuestionProps = {
  textContent?: string;
  linkText: string;
  style?: StyleProp<TextStyle>;
  onPress?: () => void;
  color?: ColorValue;
  weight?: FontWeight;
  testingSuffix: string;
};

export const LinkQuestion = ({
  textContent,
  linkText,
  style,
  onPress,
  color,
  testingSuffix,
  weight,
}: TLinkQuestionProps) => {
  const linkColor = color ?? COLORS.TEAL_NORMAL;
  const linkWeight = weight || '700';
  return (
    <Typography
      size={14}
      color={COLORS.WHITE_DARK_ACTIVE}
      weight="400"
      style={[styling.textCenter, styling.componentMargin, style]}
    >
      {textContent}
      <Typography
        size={14}
        color={linkColor}
        weight={linkWeight}
        onPress={onPress}
        testingSuffix={`${testingSuffix} Link Question Button`}
      >{` ${linkText}`}</Typography>
    </Typography>
  );
};
