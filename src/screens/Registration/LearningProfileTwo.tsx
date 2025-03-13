import {SafeAreaView, FlatList, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import StageThreeIcon from '../../assets/Svg/stage3.svg';
import {FormBuilder} from '../../components/FormBuilder';
import {Field, FieldTypes} from '../../components/FormBuilder/types';
import {useFormRef} from '../../Hooks/formRef';
import {AuthStackScreenProps} from '../../navigation/types';

type FormFields = {
  learningGoals: string;
};

const LearningProfileTwo = ({
  navigation,
}: AuthStackScreenProps<'LearningProfileTwo'>) => {
  const formRef = useFormRef<FormFields>();

  const learningGoalTime = [
    '15-20 mins daily',
    '20-45 mins daily',
    '1 hour daily',
    'More than 1 hour daily',
  ];

  const formFields: Field[] = [
    {
      type: FieldTypes.BASE_INPUT,
      name: 'learningGoals',
      subtype: 'largeText',
      fieldProps: {
        label: 'Learning Goals',
        placeholder: 'My goal is to....... ',
        placeholderTextColor: '#4A321F',
      },
    },
    {
      type: FieldTypes.CHECKBOX_FORM,
      name: 'learningGoalSet',
      fieldProps: {
        label: 'Set a learning goal',
        options: learningGoalTime,
      },
    },
  ];

  const onSubmit = (values: FormFields) => {
    console.log(values, 'form  values');
    navigation.navigate('LearningTime');
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container3}>
        <Text style={styles.logintext}>Learning {'\n'}Profile</Text>
        <View style={styles.iconContainer}>
          <StageThreeIcon width={24} height={24} />
        </View>
      </View>

      <FlatList
        data={[]} // No list items; using header to render the form only
        ListHeaderComponent={
          <View style={styles.formContainer}>
            <FormBuilder<FormFields>
              formRef={formRef}
              fields={formFields}
              initialValues={{
                learningGoals: '',
              }}
              onSubmit={onSubmit}
              submitButtonText="Next"
              submitButtonStyle={[styles.buttonContainer]}
            />
          </View>
        }
        ListFooterComponent={<View style={{height: 50}} />}
        contentContainerStyle={{paddingBottom: 100}}
      />
    </SafeAreaView>
  );
};

export default LearningProfileTwo;

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
  buttonContainer: {
    width: '92%',
    alignSelf: 'center',
    justifyContent: 'center',
    paddingVertical: 5,
    borderRadius: 5,
    marginHorizontal: 15,
  },
  formContainer: {
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'center',
    paddingBottom: '100%',
    marginTop: 32,
  },
});
