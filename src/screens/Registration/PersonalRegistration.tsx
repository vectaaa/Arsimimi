import {StyleSheet, Text, View, SafeAreaView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {AuthStackScreenProps} from '../../navigation/types';
import StageOneIcon from '../../assets/Svg/stage1.svg';
import {Field, FieldTypes} from '../../components/FormBuilder/types';
import {FormBuilder} from '../../components/FormBuilder';
import {useFormRef} from '../../Hooks/formRef';
import {Checkbox} from '../../components/Controls/Checkbox';
import {ScrollView} from 'react-native-gesture-handler';
import ModalSelector from '../../components/ModalSelector';


type FormFields = {
  fullname: string;
  ageRange: string;
  guardianEmailAddress: string;
};
const PersonalRegistration = ({
  navigation,
  route,
}: AuthStackScreenProps<'PersonalRegistration'>) => {
  const [ageRange, setAgeRange] = useState([]);

  const formRef = useFormRef<FormFields>();

  const onSubmit = () => {
    navigation.navigate('LearningProfileOne');
  };

  const ageRangeOptions = [
    {label: 'range1', value: '0-12'},
    {label: 'range2', value: '13-18'},
    {label: 'range3', value: '18-25'},
    {label: 'range4', value: '26-Above'},
  ];
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
        options: ageRangeOptions.map((option) => ({
          ...option,
          label: option.label, 
          value: option.value,
        })),
        valueField: 'value',
        itemHeaderFiled: 'label',
        modalTitle: 'Choose Age Range',
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
    <>
      <SafeAreaView style={styles.safeArea}>
        <View style={styles.container3}>
          <Text style={styles.logintext}>Personal {'\n'}Information</Text>
          <View style={styles.iconContainer}>
            <StageOneIcon width={'24'} height={'24'} />
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={styles.formContainer}>
            <FormBuilder<FormFields>
              formRef={formRef}
              fields={formFields}
              initialValues={{
                fullname: '',
                ageRange: {} as AgeRange,
                guardianEmailAddress: '',
              }}
              onSubmit={onSubmit}
              submitButtonText="Next"
              submitButtonStyle={[styles.buttonContainer]}
            />
            <Checkbox
              isActive={false}
              onPress={onSubmit}
              label="I agree to the Terms and Conditions, Privacy Policy and that I’m over 16 or have the permission of a guardian."
              style={{
                width: '100%',
                padding: 20,
                justifyContent: 'center',
                alignSelf: 'center',
              }}
            />
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default PersonalRegistration;

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
    marginTop: 20,
  },
});
