import React, {useRef, useState} from 'react';
import {
  Animated,
  Easing,
  ScrollView,
  StyleProp,
  StyleSheet,
  TextStyle,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';

import {COLORS} from '../../Theme/Colors';
import {styling} from '../../Theme/Styles/GlobalStyles';

import {TabBar} from './TabBar';
import {TabBarFlat} from './TabBarFlat';

type TabItem = {
  key: string;
  component: JSX.Element;
  label: string;
};

type TabViewProps = {
  tabs: TabItem[];
  onIndexChange?: (index: number, key: string) => void;
  isFlat?: boolean;
  preselectedTabIndex?: number;
  scrollable?: boolean;
  tabContainerStyle?: StyleProp<ViewStyle>;
  tabStyle?: StyleProp<ViewStyle>;
  activeTabStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  activeTextStyle?: StyleProp<TextStyle>;
};

export const TabView = ({
  tabs,
  onIndexChange,
  tabContainerStyle,
  tabStyle,
  activeTabStyle,
  textStyle,
  activeTextStyle,
  isFlat = false,
  preselectedTabIndex = 0,
  scrollable = false,
}: TabViewProps) => {
  const {width} = useWindowDimensions();

  const [activeIndex, setActiveIndex] = useState(preselectedTabIndex);
  const translateValue = useRef(new Animated.Value(0)).current;

  const slide = () => {
    Animated.timing(translateValue, {
      toValue: 0,
      duration: 250,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  };

  const pressHandler = (index: number) => {
    if (index !== activeIndex) {
      translateValue.setValue(index < activeIndex ? -width : width);
      slide();
      setActiveIndex(index);
      onIndexChange?.(index, tabs[index].key);
    }
  };

  const tabBarRenderer = tabs.map((value, index) => {
    return isFlat ? (
      <TabBarFlat
        key={value.key}
        onPress={pressHandler}
        index={index}
        activeIndex={activeIndex}
        activeTabStyle={activeTabStyle}
        textStyle={textStyle}
        activeTextStyle={activeTextStyle}
        tabStyle={tabStyle}>
        {value.label}
      </TabBarFlat>
    ) : (
      <TabBar
        key={value.key}
        onPress={pressHandler}
        index={index}
        activeIndex={activeIndex}
        activeTabStyle={activeTabStyle}
        textStyle={textStyle}
        activeTextStyle={activeTextStyle}
        tabStyle={tabStyle}>
        {value.label}
      </TabBar>
    );
  });

  const tabContentRenderer = tabs[activeIndex].component;

  return (
    <View style={styling.fill}>
      <View
        style={[
          isFlat ? styles.flatTabsContainer : styles.tabsContainer,
          tabContainerStyle,
        ]}>
        {tabs.length > 3 ? (
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            {tabBarRenderer}
          </ScrollView>
        ) : (
          tabBarRenderer
        )}
      </View>
      <Animated.View
        style={[
          styling.fill,
          {
            transform: [
              {
                translateX: translateValue,
              },
            ],
          },
        ]}>
        {scrollable ? (
          <ScrollView style={styling.fill}>{tabContentRenderer}</ScrollView>
        ) : (
          <View>{tabContentRenderer}</View>
        )}
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  tabsContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.WHITE,
    marginBottom: 24,
  },
  flatTabsContainer: {
    flexDirection: 'row',
    backgroundColor: COLORS.NEUTRAL_100,
    borderRadius: 5,
    marginBottom: 24,
  },
});
