import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AppStackParamList} from './types';
import React from 'react';
import {AppTabNavigator} from './AppTabNavigator';

const Stack = createNativeStackNavigator<AppStackParamList>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="HomeStack" component={AppTabNavigator} />
    </Stack.Navigator>
  );
};
