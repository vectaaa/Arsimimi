import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {AuthStackParamList} from './types';
import {Register} from '../screens/Registration/Register';
// import {NavigationContainer} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useEffect, useState} from 'react';
import OnboardingScreen from '../screens/OnboardingScreen';
import {LoginScreen} from '../screens/LoginScreen';
// import LoginScreen from '../Screens/LoginScreen';
import ConfirmEmail from '../screens/Registration/ConfirmEmail';
import PersonalRegistration from '../screens/Registration/PersonalRegistration';
import LearningProfileOne from '../screens/Registration/LearningProfileOne';
import LearningProfileTwo from '../screens/Registration/LearningProfileTwo';
import LearningTime from '../screens/Registration/LearningTime';
import React from 'react';

const Stack = createNativeStackNavigator<AuthStackParamList>();

export const AuthStackNavigator = () => {
  const [isAppFirstLaunched, setIsAppFirstLaunched] = useState<boolean | null>(
    null,
  );

  useEffect(() => {
    const checkAppFirstLaunch = async () => {
      try {
        const appData = await AsyncStorage.getItem('isAppFirstLaunched');
        if (appData === null) {
          setIsAppFirstLaunched(true);
          await AsyncStorage.setItem('isAppFirstLaunched', 'false'); // First launch
        } else {
          setIsAppFirstLaunched(false);
        }
      } catch (e) {
        console.error('Failed to check app launch state', e);
      }
    };

    checkAppFirstLaunch();
  }, []);

  // Return null until the app launch state is determined, or show a loader
  if (isAppFirstLaunched === null) {
    return null; // We can loading spinner here if needed
  }

  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      {isAppFirstLaunched && (
        <Stack.Screen name="Onboarding" component={OnboardingScreen} />
      )}
      {/* <Stack.Screen name="Register" component={Register} />
      <Stack.Screen name="ConfirmEmail" component={ConfirmEmail} /> */}
      <Stack.Screen
        name="PersonalRegistration"
        component={PersonalRegistration}
      />
      <Stack.Screen name="LearningProfileOne" component={LearningProfileOne} />
      <Stack.Screen name="LearningProfileTwo" component={LearningProfileTwo} />
      <Stack.Screen name="LearningTime" component={LearningTime} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
      {/* <Stack.Screen name="Dashboard" component={Dashboard} /> */}
    </Stack.Navigator>
  );
};
