import React from 'react';
// import Navigation from './src/navigation/RootStackNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootStackNavigator from './src/navigation/RootStackNavigator';

function App() {
  return (
    <GestureHandlerRootView>
      <RootStackNavigator />
      {/* <Navigation /> */}
    </GestureHandlerRootView>
  );
}

export default App;
