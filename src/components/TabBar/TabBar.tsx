import React from 'react';
import {
  StyleProp,
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from 'react-native';

import {Typography} from '../../components/Typography';
import {GLOBALS} from '../../Constants/Globals';
import {COLORS} from '../../Theme/Colors';

type TabProps = {
  onPress: (item: number) => void;
  children: string;
  index: number;
  activeIndex: number;
  tabStyle?: StyleProp<ViewStyle>;
  activeTabStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  activeTextStyle?: StyleProp<TextStyle>;
};

export const TabBar = ({
  onPress,
  children,
  index,
  activeIndex,
  tabStyle,
  activeTabStyle,
  textStyle,
  activeTextStyle,
}: TabProps) => {
  const isActive = index === activeIndex;
  const pressHandler = () => {
    onPress(index);
  };
  return (
    <TouchableOpacity
      activeOpacity={GLOBALS.OPACITY_ACTIVE}
      style={[
        styles.tabContainer,
        isActive
          ? activeTabStyle || {borderBottomColor: COLORS.MINT_950}
          : tabStyle,
      ]}
      onPress={pressHandler}
      testID={`TabBar ${children} Button`}
      accessibilityLabel={`TabBar ${children} Button`}>
      <Typography
        color={isActive ? COLORS.MINT_950 : COLORS.NEUTRAL_300}
        numberOfLines={1}
        style={isActive ? activeTextStyle : textStyle}>
        {children}
      </Typography>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  tabContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    paddingHorizontal: 10,
    borderBottomWidth: 1,
    borderBottomColor: COLORS.NEUTRAL_200,
  },
});
