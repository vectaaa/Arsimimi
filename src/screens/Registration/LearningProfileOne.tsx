import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {AuthScreenProps} from '../../components/Screen/AuthScreen';
import {AuthStackScreenProps} from '../../navigation/types';
import {Field, FieldTypes} from '../../components/FormBuilder/types';

type FormFields = {
  school: string;
  educationLevel: string;
  class: string;
};
const LearningProfileOne = ({
  navigation,
  route,
}: AuthStackScreenProps<'LearningProfileOne'>) => {
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
  ];
  return (
    <View>
      <Text>LearningProfileOne</Text>
    </View>
  );
};

export default LearningProfileOne;

const styles = StyleSheet.create({});
