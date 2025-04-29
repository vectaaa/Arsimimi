import React from 'react';
import Navigation from './src/navigation/RootStackNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App() {
  return (
    <GestureHandlerRootView>
      <Navigation />
    </GestureHandlerRootView>
  );
}

export default App;
