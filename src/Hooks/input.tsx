import { Field } from '../Components/FormBuilder/types';
import { useState } from 'react';

export const useInputFocus = (fields: Field[]) => {
  const initialState = {} as { [key: string]: boolean };
  fields.forEach((field) => {
    initialState[field.name] = false;
  });

  const [focusState, setFocusState] = useState(initialState);

  const setFieldFocus = (fieldName: string) => {
    setFocusState({
      ...initialState,
      [fieldName]: true,
    });
  };

  const resetFieldFocus = (fieldName: string) => {
    setFocusState({
      ...focusState,
      [fieldName]: false,
    });
  };

  const resetFocusAll = () => {
    setFocusState(initialState);
  };

  return {
    focusState,
    setFieldFocus,
    resetFieldFocus,
    resetFocusAll,
  };
};
