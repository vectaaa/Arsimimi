import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';

const Stack = createStackNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            <Stack.Screen name='Onboarding' component={OnboardingScreen}/>
            <Stack.Screen name='Login' component={LoginScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}