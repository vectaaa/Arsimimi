import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import OnboardingScreen from '../screens/OnboardingScreen';
import LoginScreen from '../screens/LoginScreen';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useEffect, useState } from 'react';

const Stack = createStackNavigator();

export default function Navigation() {
    const [isAppFirstLaunched, setIsAppFirstLaunched] = useState(null);

    useEffect(() => {
        const checkAppFirstLaunch = async () => {
            const appData = await AsyncStorage.getItem('isAppFirstLaunched');
            if (appData === null) {
                setIsAppFirstLaunched(true);
                await AsyncStorage.setItem('isAppFirstLaunched', 'false'); // Setting this after the first launch
            } else {
                setIsAppFirstLaunched(false);
            }
        };

        checkAppFirstLaunch();
    }, []);

    // Return null until the app launch state is determined
    if (isAppFirstLaunched === null) {
        return null;
    }
  return (
    <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
            {isAppFirstLaunched && (<Stack.Screen name="Onboarding" component={OnboardingScreen}/>)}
            <Stack.Screen name="LoginScreen" component={LoginScreen}/>
        </Stack.Navigator>
    </NavigationContainer>
  );
}