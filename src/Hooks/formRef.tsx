import { useRef } from 'react';
import { FormikProps } from 'formik';

export const useFormRef = <FormT,>() => {
  return useRef<FormikProps<FormT> | null>(null);
};
