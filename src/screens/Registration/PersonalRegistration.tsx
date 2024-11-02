import {Image, StyleSheet, Text, View} from 'react-native';
import React, { useState } from 'react';
import {AuthStackScreenProps} from '../../navigation/types';
import StageOneIcon from '../../assets/Svg/stage1.svg';
import {Field, FieldTypes} from '../../components/FormBuilder/types';
import { FormBuilder } from '../../components/FormBuilder';
import { useFormRef } from '../../Hooks/formRef';
import { use } from 'i18next';

type FormFields = {
  fullname: string,
  ageRange: string,
  guardianEmailAddress: string,
}
const PersonalRegistration = ({
  navigation,
  route,
}: AuthStackScreenProps<'PersonalRegistration'>) => {
  const [questions, setQuestions] = useState<Secur

  const formRef = useFormRef<FormFields>();

  const onSubmit = () => {}

  const formFields: Field[] = [
    {
      type: FieldTypes.BASE_INPUT,
      name: 'fullname',
      subtype: 'fullname',
      fieldProps: {
        label: 'Name',
        placeholder: 'Enter your fullname',
      },
    },
    {
      type: FieldTypes.MODAL_SELECTOR,
      name: 'ageRange',
      subtype: 'agerange',
      fieldProps: {
        label: 'Select age range',
        placeholder: 'Select age range',
      },
    },
    {
      type: FieldTypes.BASE_INPUT,
      name: 'guardianEmailAddress',
      subtype: 'email',
      fieldProps: {
        label: 'Guardian’s Email Address',
        placeholder: 'Enter you email address',
      },
    },
  ];

  return (
    <><View style={styles.container3}>
      <Text style={styles.logintext}>Personal {'\n'}Information</Text>
      <View style={styles.iconContainer}>
        <StageOneIcon width={'24'} height={'24'} />
      </View>
    </View>
    <FormBuilder<FormFields> 
      formRef={formRef}
      fields={formFields}
      initialValues={{
        fullname: '',
        ageRange: '',
        guardianEmailAddress: '',
      }}
      onSubmit={onSubmit}
      submitButtonText='Next'
      submitButtonStyle={styles.buttonContainer}
      />
      </>
  );
};

export default PersonalRegistration;

const styles = StyleSheet.create({
  container3: {
    flex: 1,
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingHorizontal: 5,
    paddingLeft: 15,
    paddingRight: 15,
    // backgroundColor: '#fff',
  },
  logintext: {
    fontFamily: 'georgiab',
    fontSize: 32,
    color: '#4A321F',
  },
  iconContainer: {
    margin: 20,
  },
  personalRegText: {
    flex: 1,
    // flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    paddingHorizontal: 5,
    paddingLeft: 15,
    paddingRight: 15,
  },
});
