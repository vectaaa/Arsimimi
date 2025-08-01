import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AuthStackScreenProps} from '../../navigation/types';
import StageOneIcon from '../../assets/Svg/stage1.svg';
import {Field, FieldTypes} from '../../components/FormBuilder/types';
import {FormBuilder} from '../../components/FormBuilder';
import {useFormRef} from '../../Hooks/formRef';
import {AppScreen} from '../../components/Screen/AppScreen';

type FormFields = {
  fullname: string;
  ageRange: string;
  guardianEmailAddress: string;
  agree: boolean;
};

const PersonalRegistration = ({
  navigation,
}: AuthStackScreenProps<'PersonalRegistration'>) => {
  const formRef = useFormRef<FormFields>();
  // const {fullname, ageRange, guardianEmailAddress, agree} = route.params;

  const onSubmit = (values: FormFields) => {
    const payloadStepOne = {
      name: values.fullname,
      ageRange: values.ageRange,
      guardianEmail: values.guardianEmailAddress,
      agree: values.agree,
    };
    console.log(values, 'form 2 values');
    navigation.navigate('LearningProfileOne', {payloadStepOne});
  };

  const ageRangeOptions = [
    {label: '0-12', value: '0-12'},
    {label: '13-18', value: '13-18'},
    {label: '18-25', value: '18-25'},
    {label: '26 and Above', value: '26 and Above'},
  ];

  const formFields: Field[] = [
    {
      type: FieldTypes.BASE_INPUT,
      name: 'fullname',
      subtype: 'fullname',
      fieldProps: {
        label: 'Name',
        placeholder: 'Enter fullname ',
      },
    },
    {
      type: FieldTypes.DROP_DOWN,
      name: 'ageRange',
      fieldProps: {
        label: 'Select Age Range',
        options: ageRangeOptions,
      },
    },
    {
      type: FieldTypes.BASE_INPUT,
      name: 'guardianEmailAddress',
      subtype: 'email',
      fieldProps: {
        label: 'Guardian’s Email Address ',
        placeholder: 'Enter your email address  ',
      },
    },
    {
      type: FieldTypes.CHECKBOX,
      name: 'agree',
      fieldProps: {
        label:
          'I agree to the Terms and Conditions, Privacy Policy and that I’m over 16 or have the permission of a guardian.',
        style: {
          width: '100%',
          paddingHorizontal: 25,
          justifyContent: 'center',
          alignSelf: 'center',
        },
        labelStyle: {fontFamily: 'georgia'},
      },
    },
  ];

  return (
    <AppScreen>
      <View>
        <View style={styles.container3}>
          <Text style={styles.logintext}>Personal{'\n'}Information</Text>
          <View style={styles.iconContainer}>
            <StageOneIcon width={24} height={24} />
          </View>
        </View>

        <View style={styles.formContainer}>
          <FormBuilder<FormFields>
            formRef={formRef}
            fields={formFields}
            initialValues={{
              fullname: '',
              ageRange: '',
              guardianEmailAddress: '',
              agree: false,
            }}
            onSubmit={onSubmit}
            submitButtonText="Next"
            submitButtonStyle={[styles.buttonContainer]}
          />
        </View>

        {/* Wrap the entire form in a FlatList to leverage virtualization */}
        {/* <FlatList
          data={[]} // no data items needed
          ListHeaderComponent={
            <View style={styles.formContainer}>
              <FormBuilder<FormFields>
                formRef={formRef}
                fields={formFields}
                initialValues={{
                  fullname: '',
                  ageRange: '',
                  guardianEmailAddress: '',
                  agree: false,
                }}
                onSubmit={onSubmit}
                submitButtonText="Next"
                submitButtonStyle={[styles.buttonContainer]}
              />
            </View>
          }
          ListFooterComponent={<View style={{height: 50}} />} // extra spacing if needed
          contentContainerStyle={{paddingBottom: 100}}
        /> */}
      </View>
    </AppScreen>
  );
};

export default PersonalRegistration;

const styles = StyleSheet.create({
  container3: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-between',
  },
  logintext: {
    fontFamily: 'georgiab',
    fontSize: 32,
    color: '#4A321F',
  },
  iconContainer: {
    margin: 20,
  },
  buttonContainer: {
    width: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 5,
  },
  formContainer: {
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    marginTop: 32,
  },
});
