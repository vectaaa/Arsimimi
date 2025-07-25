import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {HelpStackParamList} from './types';
import Faqs from '../Screens/Help/faqs';
import Help from '../Screens/Help';

const Stack = createNativeStackNavigator<HelpStackParamList>();

export const HelpStackNavigator = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Help" component={Help} />
      <Stack.Screen name="Faqs" component={Faqs} />
    </Stack.Navigator>
  );
};
