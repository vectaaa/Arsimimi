import React from 'react';
import { BaseInput } from '../Inputs/BaseInputs';
import { PasswordInput } from '../Inputs/BaseInputs/PasswordInput';
import { BaseInputFormProps } from './types';


export const BaseInputForm = ({ subtype, onChangeText, ...props }: BaseInputFormProps) => {
  switch (subtype) {
    case 'email':
      return <BaseInput onChangeText={onChangeText} {...props} />;
    case 'password':
      return <PasswordInput onChangeText={onChangeText} {...props} />;
      case 'confirmpassword':
      return <PasswordInput onChangeText={onChangeText} {...props} />;
    default:
      return <BaseInput onChangeText={onChangeText} {...props} />;
  }
};
