import React from 'react';
import { getOnlyDigits } from '@/Utils/formatters';
import { BaseInput } from '../Inputs/BaseInputs';
import { PasswordInput } from '../Inputs/BaseInputs/PasswordInput';
import { BaseInputFormProps } from './types';
import { BaseAmountInput } from '@/Components/Inputs/BaseInputs/AmountBaseInput';
import { PhoneInput } from '@/Components/Inputs/BaseInputs/PhoneInput';
import { AccountNumberInput } from '@/Components/Inputs/BaseInputs/AccountNumberInput';

export const BaseInputForm = ({ subtype, onChangeText, ...props }: BaseInputFormProps) => {
  switch (subtype) {
    case 'email':
      return <PhoneInput onChangeText={onChangeText} {...props} />;
    case 'password':
      return <PasswordInput onChangeText={onChangeText} {...props} />;
    default:
      return <BaseInput onChangeText={onChangeText} {...props} />;
  }
};
