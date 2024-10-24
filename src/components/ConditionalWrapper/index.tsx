import React from 'react';
import { StyleProp, View, ViewStyle } from 'react-native';

type Props = {
  condition: boolean;
  children: React.ReactNode[] | React.ReactNode;
  wrapper(children: React.ReactNode[] | React.ReactNode, style?: StyleProp<ViewStyle>): JSX.Element;
  style?: StyleProp<ViewStyle>;
};

export const ConditionalWrapper = ({ condition, children, wrapper, style }: Props) => {
  return condition ? wrapper(children, style) : <View style={style}>{children}</View>;
};
