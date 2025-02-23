import React from 'react';
import {BaseInput} from '../Inputs/BaseInputs';
import {PasswordInput} from '../Inputs/BaseInputs/PasswordInput';
import {BaseInputFormProps} from './types';
import {styling} from '../../Theme/Styles/GlobalStyles';

export const BaseInputForm = ({
  subtype,
  onChangeText,
  ...props
}: BaseInputFormProps) => {
  switch (subtype) {
    case 'email':
      return <BaseInput onChangeText={onChangeText} {...props} />;
    case 'largeText':
      return (
        <BaseInput
          onChangeText={onChangeText}
          multiline={true}
          textAlignVertical="top"
          style={styling.boxHeight}
          {...props}
        />
      );
    case 'password':
      return <PasswordInput onChangeText={onChangeText} {...props} />;
    case 'confirmpassword':
      return <PasswordInput onChangeText={onChangeText} {...props} />;
    default:
      return <BaseInput onChangeText={onChangeText} {...props} />;
  }
};
