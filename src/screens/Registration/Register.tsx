import {View, Text, Platform, Image, Dimensions} from 'react-native';
import React from 'react';
import {AuthStackScreenProps} from '../../navigation/types';
import {object} from 'yup';
import {VALIDATION} from '../../Constants/Validation';
import {Field, FieldTypes} from '../../components/FormBuilder/types';
import {FormBuilder} from '../../components/FormBuilder';
import {styles} from './styles';
import {useFormRef} from '../../Hooks/formRef';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {SafeAreaView} from 'react-native-safe-area-context';
import {styling} from '../../Theme/Styles/GlobalStyles';
import {IMAGES} from '../../Theme/Images';
import {PressableOpacity} from '../../components/Buttons/PressebleOpacity';
import {useRegistrationInitiateMutation} from '../../Services/modules/student';

type FormFields = {
  emailAddress: string;
  password: string;
  confirmpassword: string;
};
export const Register = ({navigation}: AuthStackScreenProps<'Register'>) => {
  // Get the width of the screen
  const {width, height} = Dimensions.get('window');
  // Calculate the screen diagonal size in inches
  const screenDiagonal = Math.sqrt(width * width + height * height) / 160;

  const formRef = useFormRef<FormFields>();
  const [initiateRegistration] = useRegistrationInitiateMutation();

  //Where the initiate registration starts
  const onSubmit = (values: FormFields) => {
    initiateRegistration({
      email: values.emailAddress,
      password: values.password,
    })
      .unwrap()
      .then(response => {
        navigation.navigate('ConfirmEmail', {
          id: response.data.id,
          email: response.data.email,
          onContinue: (otp: string) => {
            navigation.navigate('LearningProfileOne', {
              otp: otp,
            });
          },
        });
      })
      .catch(() => {});
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
    {
      type: FieldTypes.BASE_INPUT,
      name: 'confirmpassword',
      subtype: 'password',
      fieldProps: {
        label: 'Confirm Password',
        placeholder: 'Confirm Password',
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

  const renderSocialLogin = () => (
    <>
      <View style={styles.arrange1}>
        <View style={styles.lineDesign} />
        <Text style={styles.textlog}>Or login with</Text>
        <View style={styles.lineDesign} />
      </View>
      <View style={styles.arrange2}>
        <Image source={IMAGES.GOOGLEICON} style={{marginHorizontal: 10}} />
        <Image source={IMAGES.FACEBOOKICON} style={{marginHorizontal: 10}} />
      </View>
      <View style={styles.arrange3}>
        <Text style={styles.textlog2}>I have an account? </Text>
        <PressableOpacity testingSuffix="" onPress={handleLoginNavigation}>
          <Text style={styles.textlog3}> Sign In</Text>
        </PressableOpacity>
      </View>
    </>
  );

  const renderForm = () => (
    <View style={styles.formContainer}>
      <FormBuilder<FormFields>
        formRef={formRef}
        fields={formFields}
        initialValues={{
          emailAddress: '',
          password: '',
          confirmpassword: '',
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
            {renderSocialLogin()}
          </>,
        )
      ) : (
        <>
          {renderHeader()}
          {renderScrollView(renderForm())}
          {renderSocialLogin()}
        </>
      )}
    </SafeAreaView>
  );
};
