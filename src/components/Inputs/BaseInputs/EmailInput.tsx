import React from 'react';
import {BaseInput, BaseInputProps} from '.';
import {stylesInput} from '../styles';

export const EmailInput = ({
  label,
  withoutError,
  error,
  ...props
}: BaseInputProps) => {
  return (
    <BaseInput
      label={label || 'Email Address'}
      placeholder="Enter your email Address"
      style={stylesInput.inputWithRightIcon}
      withoutError={withoutError}
      error={error}
      {...props}
      />
  );
};
