import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';

import {AuthStackScreenProps} from '../../navigation/types';
import { PinInput } from '../../components/Inputs/PinInput';
import { COLORS } from '../../Theme/Colors';
import { PressableOpacity } from '../../components/Buttons/PressebleOpacity';

export type ConfirmEmailProps = {
  onContinue: (pin: number) => void;
  barLength?: number;
};
const ConfirmEmail = ({
  navigation,
  route,
}: AuthStackScreenProps<'ConfirmEmail'>) => {
  // const {onContinue, barLength} = route.params;

  const [pinValue, setPinValue] = useState('');
  // const handleContinue = () => {
  //     navigation.navigate();
  // };

  const handleContinue = () => {
    navigation.navigate('PersonalRegistration');
  };

  //   barLength,
    //   currentIndex,
    //   pin: pinValue,
    //   onContinue: onContinue,
    //   showIcon,

  return (
    <View style={styles.container2}>
      <Text style={styles.logintext}>Confirm Email</Text>
      <View style={styles.textContainer}>
        <Text style={styles.digitText}>
          A 6 digit code has been sent to your mailbox
        </Text>
    </View>

    <View>
      <PinInput
        pin={pinValue}
        length={6}
        autoFocus
        onPinChange={setPinValue}
        containerStyle={styles.pinContainer}
        pinBoxStyle={stylesConfirmEmail.spacer}
      />
      <View style={stylesConfirmEmail.resendOtpTextView}>
      <PressableOpacity testingSuffix={''} onPress={handleContinue}>
      <Text style={stylesConfirmEmail.resendOtpText}>Resend Code</Text>
      </PressableOpacity>
      </View>
      </View>

        <PressableOpacity
        onPress={handleContinue}
              style={[stylesConfirmEmail.button,
              pinValue.length != 6 ? stylesConfirmEmail.buttonDisabled : stylesConfirmEmail.button
              ]} testingSuffix={''}>
            <Text style={stylesConfirmEmail.confirmText}>Confirm Code</Text>
         </PressableOpacity>
    </View>
  );
};

export default ConfirmEmail;

const stylesConfirmEmail = StyleSheet.create({
    buttonDisabled: {
        backgroundColor: COLORS.NEUTRAL_BUTTON,
    },
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        width: '100%',
        backgroundColor: COLORS.ORANGE_NORMAL,
        borderRadius: 4,
    },
      pinContainer: {
        justifyContent: 'center',
        marginTop: 10,
      },
      spacer: {
        marginHorizontal: 6,
      },
      resendOtpText: {
        fontFamily: 'georgia',
      },
      resendOtpTextView: {
        marginTop: -45,
        marginBottom: 40,
        
        paddingLeft: 10,
      },
      confirmText: {
        fontFamily: 'georgia',
        fontSize: 17,
        color: 'white',
      },
});
