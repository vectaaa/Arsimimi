import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, Text, View} from 'react-native';
import {AuthStackScreenProps} from '../../navigation/types';
import {Field, FieldTypes} from '../../components/FormBuilder/types';
import StageTwoIcon from '../../assets/Svg/stage2.svg';
import {FormBuilder} from '../../components/FormBuilder';
import {useFormRef} from '../../Hooks/formRef';

type FormFields = {
  school: string;
  educationLevel: string;
  class: string;
};

const LearningProfileOne = ({
  navigation,
}: AuthStackScreenProps<'LearningProfileOne'>) => {
  const formRef = useFormRef<FormFields>();

  const educationLevelOptions = [
    {label: 'Primary School', value: 'Primary School'},
    {label: 'Secondary School', value: 'Secondary School'},
    {label: 'Higher Institution', value: 'Higher Institution'},
    {label: 'Other...', value: 'Other...'},
  ];

  const onSubmit = (values: FormFields) => {
    console.log(values, 'form 2 values');
    navigation.navigate('LearningProfileTwo');
  };

  // Dynamic Fields Logic
  const formFields: Field[] = [
    {
      type: FieldTypes.BASE_INPUT,
      name: 'school',
      subtype: 'school',
      fieldProps: {
        label: 'School / Institution',
        placeholder: 'Enter your school/institution',
      },
    },
    {
      type: FieldTypes.DROP_DOWN,
      name: 'educationLevel',
      fieldProps: {
        label: 'Educational Level',
        options: educationLevelOptions,
      },
    },

    {
      type: FieldTypes.BASE_INPUT,
      name: 'class',
      subtype: 'class',
      fieldProps: {
        label: 'Class',
        placeholder: 'Enter your class',
      },
    },
    {
      type: FieldTypes.CHECKBOX,
      name: '',
      subtype: '',
      fieldProps: {
        label: '',
        placeholder: '',
      },
    },
  ];

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container3}>
        <Text style={styles.logintext}>Learning {'\n'}Profile</Text>
        <View style={styles.iconContainer}>
          <StageTwoIcon width={'24'} height={'24'} />
        </View>
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.formContainer}>
          <FormBuilder<FormFields>
            formRef={formRef}
            fields={formFields}
            initialValues={{
              school: '',
              educationLevel: '',
              class: '',
            }}
            onSubmit={onSubmit}
            submitButtonText="Next"
            submitButtonStyle={[styles.buttonContainer]}
          />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LearningProfileOne;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container3: {
    flexDirection: 'row',
    paddingTop: 20,
    justifyContent: 'space-between',
    alignContent: 'center',
    paddingLeft: 15,
    paddingHorizontal: 5,
  },
  logintext: {
    fontFamily: 'georgiab',
    fontSize: 32,
    color: '#4A321F',
  },
  iconContainer: {
    margin: 20,
  },
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    paddingBottom: '100%',
    marginTop: 20,
  },
  buttonContainer: {
    width: '92%',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 15,
  },
});
