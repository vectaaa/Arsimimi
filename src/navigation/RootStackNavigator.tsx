import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import {AuthStackNavigator} from './AuthStackNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {RootStackParamList} from './types';
import {navigationRef} from './Root';
import {AppTabNavigator} from './AppTabNavigator';
import {StatusBar} from 'react-native';
import {COLORS} from '../Theme/Colors';

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function RootStackNavigator() {
  return (
    <>
      <StatusBar
        barStyle="dark-content"
        backgroundColor={COLORS.TRANSPARENT}
        translucent
      />
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Auth" component={AuthStackNavigator} />
          <Stack.Screen name="App" component={AppTabNavigator} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
