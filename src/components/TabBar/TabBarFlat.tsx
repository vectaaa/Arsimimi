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
import {styling} from '../../Theme/Styles/GlobalStyles';

type TabFlatProps = {
  onPress: (item: number) => void;
  children: string;
  index: number;
  activeIndex: number;
  tabStyle?: StyleProp<ViewStyle>;
  activeTabStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  activeTextStyle?: StyleProp<TextStyle>;
};

export const TabBarFlat = ({
  onPress,
  children,
  index,
  activeIndex,
  tabStyle,
  activeTabStyle,
  textStyle,
  activeTextStyle,
}: TabFlatProps) => {
  const isActive = index === activeIndex;
  const pressHandler = () => {
    onPress(index);
  };
  return (
    <TouchableOpacity
      activeOpacity={GLOBALS.OPACITY_ACTIVE}
      style={[
        styling.center,
        styles.container,
        tabStyle,
        isActive && (activeTabStyle || styles.itemActive),
      ]}
      onPress={pressHandler}
      testID={`TabBarFlat ${children} Button`}
      accessibilityLabel={`TabBarFlat ${children} Button`}>
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
  container: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: COLORS.NEUTRAL_100,
    borderRadius: 5,
    padding: 4,
  },
  itemActive: {
    flex: 1,
    backgroundColor: COLORS.WHITE,
    borderRadius: 5,
    margin: 6,
    alignItems: 'center',
  },
});
