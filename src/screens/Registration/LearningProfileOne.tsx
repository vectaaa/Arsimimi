import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {AuthStackScreenProps} from '../../navigation/types';
import {Field, FieldTypes} from '../../components/FormBuilder/types';
import StageTwoIcon from '../../assets/Svg/stage2.svg';
import {FormBuilder} from '../../components/FormBuilder';
import {useFormRef} from '../../Hooks/formRef';
import {AppScreen} from '../../components/Screen/AppScreen';

type FormFields = {
  school: string;
  educationLevel: string;
  class: string;
  examType: string[];
};

const LearningProfileOne = ({
  navigation,
  route,
}: AuthStackScreenProps<'LearningProfileOne'>) => {
  const {payloadStepOne} = route.params;
  const formRef = useFormRef<FormFields>();

  const educationLevelOptions = [
    {label: 'Primary School', value: 'Primary School'},
    {label: 'Secondary School', value: 'Secondary School'},
    {label: 'Higher Institution', value: 'Higher Institution'},
    {label: 'Other...', value: 'Other...'},
  ];

  const examTypeOptions = [
    'Primary School',
    'Junior Secondary School',
    'Senior Secondary School',
    'Professional Exam',
  ];

  const onSubmit = (values: FormFields) => {
    const payloadStepTwo = {
      school: values.school,
      educationLevel: values.educationLevel,
      class: values.class,
      examTypes: values.examType,
    };
    console.log(values, 'form  values');
    console.log(payloadStepTwo, 'form  values');
    navigation.navigate('LearningProfileTwo', {
      payloadStepOne,
      payloadStepTwo,
    });
  };

  // Dynamic Fields Logic
  const formFields: Field[] = [
    {
      type: FieldTypes.BASE_INPUT,
      name: 'school',
      subtype: 'school',
      fieldProps: {
        label: 'School / Institution',
        placeholder: 'Enter your school/institution  ',
      },
    },
    {
      type: FieldTypes.DROP_DOWN,
      name: 'educationLevel',
      subtype: 'educationLevel',
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
      type: FieldTypes.CHECKBOX_FORM,
      name: 'examType',
      fieldProps: {
        label: 'Preferred Exam Types',
        options: examTypeOptions,
      },
    },
  ];

  return (
    <AppScreen>
      {/* <SafeAreaView style={styles.safeArea}> */}
      <View style={styles.container3}>
        <Text style={styles.logintext}>Learning {'\n'}Profile</Text>
        <View style={styles.iconContainer}>
          <StageTwoIcon width={24} height={24} />
        </View>
      </View>

      <View style={styles.formContainer}>
        <View>
          <FormBuilder<FormFields>
            formRef={formRef}
            fields={formFields}
            initialValues={{
              school: '',
              educationLevel: '',
              class: '',
              examType: [],
            }}
            onSubmit={onSubmit}
            submitButtonText="Next"
            submitButtonStyle={[styles.buttonContainer]}
          />
        </View>
      </View>

      {/* <FlatList
        data={[]} // No list items since we're only using header
        ListHeaderComponent={
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
        }
        ListFooterComponent={<View style={{height: 50}} />}
        contentContainerStyle={{paddingBottom: 100}}
      /> */}
      {/* </SafeAreaView> */}
    </AppScreen>
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
    alignItems: 'center',
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
    marginTop: 32,
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
