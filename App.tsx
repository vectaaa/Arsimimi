import * as React from 'react';
// import Navigation from './src/navigation/RootStackNavigator';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import RootStackNavigator from './src/navigation/RootStackNavigator';
import {Provider} from 'react-redux';
import {store} from './src/Store';
import {SafeAreaProvider} from 'react-native-safe-area-context';

function App() {
  return (
    <Provider store={store}>
      <GestureHandlerRootView>
        <RootStackNavigator />
        {/* <Navigation /> */}
      </GestureHandlerRootView>
    </Provider>
  );
}

export default App;
