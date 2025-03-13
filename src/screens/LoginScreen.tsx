import {Dimensions, Platform, SafeAreaView, Text, View} from 'react-native';
import React from 'react';
import {useFormRef} from '../../src/Hooks/formRef';
import {FormBuilder} from '../components/FormBuilder';
import {Field, FieldTypes} from '../components/FormBuilder/types';
import {AuthStackScreenProps} from '../navigation/types';
import {object} from 'yup';
import {VALIDATION} from '../Constants/Validation';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {styling} from '../Theme/Styles/GlobalStyles';
import {styles} from './Registration/styles';

type FormFields = {
  emailAddress: string;
  password: string;
};

export const LoginScreen = ({
  navigation,
}: AuthStackScreenProps<'LoginScreen'>) => {
  // Get the width of the screen
  const {width, height} = Dimensions.get('window');
  // Calculate the screen diagonal size in inches
  const screenDiagonal = Math.sqrt(width * width + height * height) / 160;

  const formRef = useFormRef<FormFields>();

  //Where the initiate registration starts
  const onSubmit = (values: FormFields) => {
    console.log(values, 'form values');
    navigation.navigate('ConfirmEmail');
  };

  const registerSchema = object({
    emailAddress: VALIDATION.email,
    password: VALIDATION.password,
    confirmpassword: VALIDATION.confirmPassword,
  });

  const handleLoginNavigation = () => {
    navigation.navigate('LoginScreen');
  };

  const formFields: Field[] = [
    {
      type: FieldTypes.BASE_INPUT,
      name: 'emailAddress',
      subtype: 'email',
      fieldProps: {
        label: 'Email Address',
        placeholder: 'Enter you email address',
      },
    },
    {
      type: FieldTypes.BASE_INPUT,
      name: 'password',
      subtype: 'password',
      fieldProps: {
        label: 'Password',
        placeholder: 'Enter Password',
      },
    },
  ];

  const renderHeader = () => (
    <View style={styles.container}>
      <Text style={styles.logintext}>Hey, {'\n'}Register Now!</Text>
      <View style={styles.textContainer}>
        <Text style={styles.studentText}>Student</Text>
        <Text style={styles.demacation}>/</Text>
        <Text style={styles.guardianText}>Guardian</Text>
      </View>
    </View>
  );

  const renderForm = () => (
    <View style={styles.formContainer}>
      <FormBuilder<FormFields>
        formRef={formRef}
        fields={formFields}
        initialValues={{
          emailAddress: '',
          password: '',
        }}
        onSubmit={onSubmit}
        submitButtonText="Continue"
        submitButtonStyle={styles.buttonContainer}
        validationSchema={registerSchema}
      />
    </View>
  );

  const renderScrollView = (children: React.ReactNode) => (
    <KeyboardAwareScrollView
      style={styling.fill}
      extraScrollHeight={Platform.select({ios: 70, android: 30})}
      enableOnAndroid>
      {children}
    </KeyboardAwareScrollView>
  );

  return (
    <SafeAreaView>
      {screenDiagonal < 5.5 ? (
        renderScrollView(
          <>
            {renderHeader()}
            {renderForm()}
          </>,
        )
      ) : (
        <>
          {renderHeader()}
          {renderScrollView(renderForm())}
        </>
      )}
    </SafeAreaView>
  );
};
