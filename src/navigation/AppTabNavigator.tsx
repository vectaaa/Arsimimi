import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import React from 'react';
import {StyleSheet} from 'react-native';
import {AppTabParamList} from './types';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {COLORS} from '../Theme/Colors';
import Dashboard from '../Screens/Dashboard';
import {Icons} from '../Theme/Icons';
import Activity from '../Screens/Activity';
import Community from '../Screens/Community';
import Help from '../Screens/Help';
import Settings from '../Screens/Settings';
import { HelpStackNavigator } from './HelpStackNavigator';
import { HomeStackNavigator } from './HomeStackNavigator';

const Tab = createBottomTabNavigator<AppTabParamList>();

export const AppTabNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: COLORS.ORANGE_NORMAL,
        tabBarInactiveTintColor: COLORS.WHITE_DARK,
        tabBarLabelStyle: styles.label,
        tabBarHideOnKeyboard: true,
        tabBarStyle: styles.bar,
        tabBarLabelPosition: 'below-icon',
      }}
      safeAreaInsets={{
        bottom: Math.max(insets.bottom + 5, 15),
      }}>
      <Tab.Screen
        name="Home"
        component={HomeStackNavigator}
        options={{
          tabBarIcon: Icons.HomeIcon,
          tabBarLabel: 'Home',
          tabBarTestID: 'Tab Navigator Home',
          tabBarAccessibilityLabel: 'Tab Navigator Home',
        }}
      />
      <Tab.Screen
        name="ActivityStack"
        component={Activity}
        options={{
          tabBarIcon: Icons.Activity,
          tabBarLabel: 'Activity',
          tabBarTestID: 'Tab Navigator Activity',
          tabBarAccessibilityLabel: 'Tab Navigator Activity',
        }}
      />
      <Tab.Screen
        name="CommunityStack"
        component={Community}
        options={{
          tabBarIcon: Icons.CommunityIcon,
          tabBarLabel: 'Community',
          tabBarTestID: 'Tab Navigator Community',
          tabBarAccessibilityLabel: 'Tab Navigator Community',
        }}
      />
      <Tab.Screen
        name="HelpStack"
        component={HelpStackNavigator}
        options={{
          tabBarIcon: Icons.HelpIcon,
          tabBarLabel: 'Help',
          tabBarTestID: 'Tab Navigator Help',
          tabBarAccessibilityLabel: 'Tab Navigator Help',
        }}
      />
      <Tab.Screen
        name="SettingsStack"
        component={Settings}
        options={{
          tabBarIcon: Icons.Settings,
          tabBarLabel: 'Settings',
          tabBarTestID: 'Tab Navigator Settings',
          tabBarAccessibilityLabel: 'Tab Navigator Settings',
        }}
      />
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  label: {
    color: COLORS.ORANGE_THICK,
    fontSize: 10,
    width: '100%',
    fontWeight: '600',
  },
  bar: {
    paddingTop: 12,
  },
});
