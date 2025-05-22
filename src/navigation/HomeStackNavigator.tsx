import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HomeStackParamList} from './types';
import React from 'react';
import PracticeTestIndex from '../Screens/Dashboard/PracticeTest/PracticeTestIndex';
import Dashboard from '../Screens/Dashboard';

const Stack = createNativeStackNavigator<HomeStackParamList>();

export const HomeStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {/* <Stack.Screen name="HomeStack" component={AppTabNavigator} /> */}
      <Stack.Screen name="Dashboard" component={Dashboard} />
      <Stack.Screen name="PracticeTest" component={PracticeTestIndex} />
      {/* <Stack.Screen name="ExamMode" component={AppTabNavigator} /> */}
    </Stack.Navigator>
  );
};
