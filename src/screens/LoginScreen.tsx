import {
  Dimensions,
  Image,
  Platform,
  SafeAreaView,
  Text,
  View,
} from 'react-native';
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
// import { Typography } from '../components/Typography';
// import {t} from 'i18next';
// import {LinkQuestion} from '../components/LinkQuestion';
import {PressableOpacity} from '../components/Buttons/PressebleOpacity';
import {IMAGES} from '../Theme/Images';
import {CommonActions} from '@react-navigation/native';

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

  const navigateToDashboard = () => {
    navigation.dispatch(
      CommonActions.reset({
        routes: [{name: 'App'}],
      }),
    );
  };

  //Where the initiate registration starts
  const onSubmit = (values: FormFields) => {
    console.log(values, 'form values');
    navigateToDashboard();
  };

  const loginSchema = object({
    emailAddress: VALIDATION.email,
    password: VALIDATION.password,
  });

  const handleRegisterNavigation = () => {
    navigation.navigate('Register');
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
      <Text style={styles.logintext}>Welcome Back,{'\n'}Sign In</Text>
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
        <Text style={styles.textlog2}>Don’t have an account? </Text>
        <PressableOpacity testingSuffix="" onPress={handleRegisterNavigation}>
          <Text style={styles.textlog3}> Register</Text>
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
        }}
        onSubmit={onSubmit}
        submitButtonText="Continue"
        submitButtonStyle={styles.buttonContainer}
        validationSchema={loginSchema}
      />
      {/* <LinkQuestion
        linkText={t('login.linkQuestion.userMigration.linkText')}
        textContent={t('login.linkQuestion.userMigration.textContent')}
        testingSuffix="Migrate Account"
      /> */}
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
