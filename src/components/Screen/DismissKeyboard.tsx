import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';

export const DismissKeyboard = ({ children }: { children: React.ReactNode }) => (
  <TouchableWithoutFeedback
    onPress={Keyboard.dismiss}
    testID="Dismiss Keyboard"
    accessibilityLabel="Dismiss Keyboard"
  >
    <View onStartShouldSetResponder={() => true}>{children}</View>
  </TouchableWithoutFeedback>
);