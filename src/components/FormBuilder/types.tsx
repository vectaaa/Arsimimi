import React from "react";
import * as yup from 'yup';
import { BaseInputProps } from "../Inputs/BaseInputs";
import { FormikProps } from "formik";
import { StyleProp, ViewStyle } from "react-native";
import { PinInputProps } from "../Inputs/PinInput";
import { CheckboxProps } from "../Controls/Checkbox";
import { SelectPickerProps } from "../SelectPicker/types";

export enum FieldTypes {
    BASE_INPUT = 'baseInput',
    SELECTOR = 'selector',
    DATE = 'date',
    PIN = 'pin',
    CHECKBOX = 'checkbox',
    MODAL_SELECTOR = "modalSelector",
}


export type BaseInputSubTypes = undefined | 'email' | 'password';
export type BaseInputFormProps = {
    subtype?: BaseInputSubTypes;
}

export type FieldSubTypes<T> = T extends FieldTypes.BASE_INPUT
? BaseInputSubTypes : never;

export type FieldValues = {
    [key: string]: unknown;
  };
  
  export type InputFieldValues = {
    [key: string]: string;
  };
export type CheckboxFieldValues = {
    [key: string]: boolean;
};
export type SchoolSelectorFieldValues = {
    [key: string]: ;
  };
  
  export type EducationLevelOperatorFieldValues = {
    [key: string]: ;
  };

  export type ClassesOperatorFieldValues = {
    [key: string]: ;
  };
  export type PinFieldValues = {
    [key: string]: string;
  };
  export type PinFormFieldProps = Omit<
  PinInputProps,
  'descriptionComponent' | 'pin' | 'onPinChange'
> & { label: string };

export type FieldProps<T> = T extends FieldTypes.BASE_INPUT
  ? Omit<BaseInputProps, 'value' | 'onChangeText'>
  : T extends FieldTypes.CHECKBOX
  ? Omit<CheckboxProps, 'isActive' | 'onPress'>
  : T extends FieldTypes.SELECTOR           
  ? Omit<SelectPickerProps<any>, 'selectedValue' | 'onChangeSelected'>
  : T extends FieldTypes.PIN
  ? PinFormFieldProps
  : never;


  export type Field = {
    name: string;
    type: FieldTypes;
    subtype?: FieldSubTypes<Field['type']>;
    fieldProps?: FieldProps<Field['type']>;
    component?: ({ onSelect, value }: { onSelect: (item: any) => void; value: any }) => JSX.Element;
    additionalComponent?:
      | React.FC<{ value: string } | any>
      | React.FunctionComponent<{ value: string } | any>;
    additionalComponentProps?: { [key: string]: any };
    hidden?: boolean;
  };

  export type FormBuilderProps<ReturnType extends FieldValues> = {
    formRef?: React.RefObject<FormikProps<ReturnType>>;
    fields: Field[];
    initialValues?: Partial<ReturnType>;
    onSubmit: (values: ReturnType) => void;
    onValuesChange?: (
      values: ReturnType,
      submitForm: (() => Promise<void>) & (() => Promise<any>)
    ) => void;
    validationSchema?: yup.ObjectSchema<any>;
    submitButtonText?: string;
    submitButtonStyle?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
    canProceed?: boolean;
    hideSubmit?: boolean;
    additionalButton?:
      | React.FC<{ value: string } | any>
      | React.FunctionComponent<{ value: string } | any>;
    buttonLocation?: 'bottom' | 'beneath';
    containerStyle?: StyleProp<ViewStyle> | StyleProp<ViewStyle>[];
  };