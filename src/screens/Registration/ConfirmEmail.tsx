import {Alert, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {styles} from './styles';

import {AuthStackScreenProps} from '../../navigation/types';
import {PinInput} from '../../components/Inputs/PinInput';
import {COLORS} from '../../Theme/Colors';
import {PressableOpacity} from '../../components/Buttons/PressebleOpacity';
import {AppScreen} from '../../components/Screen/AppScreen';
import {
  useResendOtpMutation,
  useValidateOtpMutation,
} from '../../Services/modules/student';
import {ResendOtpResponse, ValidateOtpResponse} from '@/Types/StudentService';

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
  const [validateOtp] = useValidateOtpMutation();
  const [resendOtp] = useResendOtpMutation();
  // const {id, email, otp} = route.params;

  const handleContinue = () => {
    if (pinValue.length < 4) {
      Alert.alert('Invalid OTP length');
    }
    validateOtp({
      email: route.params.email,
      otp: pinValue,
    })
      .unwrap()
      .then((response: ValidateOtpResponse) => {
        console.log('Verification Success', response);

        navigation.navigate('PersonalRegistration');
      })
      .catch(error => {
        console.log('Verification Failed', error);
        Alert.alert('Verification Failed', 'The OTP you entered is incorrect.');
      });
  };

  const resendOtpContinue = () => {
    resendOtp({
      email: route.params.email,
    })
      .unwrap()
      .then((response: ResendOtpResponse) => {
        console.log('Verification Success', response);
        Alert.alert('An OTP has been sent to your email.');
      })
      .catch(error => {
        Alert.alert('Error', error);
      });
  };

  return (
    <AppScreen>
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
            <PressableOpacity testingSuffix={''} onPress={resendOtpContinue}>
              <Text style={stylesConfirmEmail.resendOtpText}>Resend Code</Text>
            </PressableOpacity>
          </View>
        </View>

        <PressableOpacity
          onPress={handleContinue}
          style={[
            stylesConfirmEmail.button,
            pinValue.length !== 6
              ? stylesConfirmEmail.buttonDisabled
              : stylesConfirmEmail.button,
          ]}
          testingSuffix={''}>
          <Text style={stylesConfirmEmail.confirmText}>Confirm Code</Text>
        </PressableOpacity>
      </View>
    </AppScreen>
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
