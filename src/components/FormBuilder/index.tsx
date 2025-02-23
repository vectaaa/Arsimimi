import React, {useEffect} from 'react';
import {StyleSheet, View} from 'react-native';
import {Formik, useFormikContext} from 'formik';

import {Button} from '../../components/Buttons/Button';
import {Checkbox, CheckboxProps} from '../../components/Controls/Checkbox';
import {
  CheckboxFieldValues,
  FormBuilderProps,
  InputFieldValues,
  FieldValues,
  FieldTypes,
  SelectorFiledValues,
  BaseInputFormProps,
  BaseInputSubTypes,
  PinFieldValues,
  PinFormFieldProps,
  CheckboxFormFieldValues,
} from './types';
import {SelectPicker} from '../SelectPicker/index';
import {useInputFocus} from '../../Hooks/input';
import {DatePicker} from '../Inputs/DatePicker';
import {BaseInputForm} from './BaseInputForm';
import {BaseInputProps} from '../Inputs/BaseInputs';
import {SelectPickerProps} from '../SelectPicker/types';
import {styling} from '../../Theme/Styles/GlobalStyles';
import {SelectorInput} from '../../components/FormBuilder/SelectorInput';
import {PinInput} from '../../components/Inputs/PinInput';
import {Typography} from '../../components/Typography';
import DropdownComponent, {DropdownItem} from '../Dropdown';
import {DropdownProps} from 'react-native-element-dropdown/lib/typescript/components/Dropdown/model';
import CheckBoxForm, {CheckBoxFormProps} from '../Controls/CheckBoxForm';

const FormValuesGrabber = ({
  onValuesChange,
}: {
  onValuesChange?: (values: any, submitForm: any) => void;
}) => {
  const {values, submitForm} = useFormikContext<FieldValues>();
  useEffect(() => {
    onValuesChange && onValuesChange(values, submitForm);
  }, [values, onValuesChange, submitForm]);
  return null;
};

export function FormBuilder<ReturnType extends FieldValues>({
  formRef,
  fields,
  initialValues = {} as ReturnType,
  onSubmit,
  onValuesChange,
  validationSchema,
  submitButtonText = 'Submit',
  submitButtonStyle = {},
  canProceed = true,
  hideSubmit = false,
  additionalButton,
  buttonLocation = 'bottom',
  containerStyle,
  render,
}: FormBuilderProps<ReturnType>) {
  const {focusState, setFieldFocus, resetFieldFocus, resetFocusAll} =
    useInputFocus(fields);
  const AdditionalButton = additionalButton;

  return (
    <Formik
      innerRef={formRef}
      initialValues={initialValues}
      validateOnMount
      onSubmit={values => {
        resetFocusAll();
        onSubmit(values as ReturnType);
      }}
      validationSchema={validationSchema}>
      {({
        handleSubmit,
        setFieldValue,
        setFieldTouched,
        values,
        errors,
        isValid,
        touched,
      }) => (
        <View style={containerStyle || styling.scrollSpaceBetween}>
          <FormValuesGrabber onValuesChange={onValuesChange} />
          <View>
            {fields.map(field => {
              if (!field.hidden) {
                const {
                  name,
                  type,
                  data,
                  subtype,
                  fieldProps = {},
                  additionalComponent,
                  additionalComponentProps = {},
                } = field;
                const AdditionalComponent = additionalComponent;
                let fieldComponent = <></>;

                const commonInputProps = {
                  isFocused: focusState[name],
                  onFocus: () => setFieldFocus(name),
                  onBlur: () => {
                    resetFieldFocus(name);
                    setFieldTouched(name);
                  },
                  error:
                    touched[name] && errors[name]
                      ? (errors[name] as string)
                      : undefined,
                };

                switch (type) {
                  case FieldTypes.BASE_INPUT:
                    fieldComponent = (
                      <BaseInputForm
                        {...commonInputProps}
                        {...(fieldProps as BaseInputFormProps)}
                        subtype={subtype as BaseInputSubTypes}
                        value={(values as InputFieldValues)[name]}
                        onChangeText={(value: string) =>
                          setFieldValue(name, value)
                        }
                      />
                    );
                    break;

                  case FieldTypes.CHECKBOX:
                    fieldComponent = (
                      <Checkbox
                        {...(fieldProps as CheckboxProps)}
                        isActive={(values as CheckboxFieldValues)[name]}
                        onPress={() => setFieldValue(name, !values[name])}
                        showError={!!commonInputProps.error}
                      />
                    );
                    break;
                  case FieldTypes.CHECKBOX_FORM:
                    fieldComponent = (
                      <CheckBoxForm
                        {...(fieldProps as CheckBoxFormProps)}
                        options={(fieldProps as CheckBoxFormProps).options}
                        onSelectionChange={selected =>
                          setFieldValue(name, selected)
                        }
                      />
                    );
                    break;
                  case FieldTypes.MODAL_SELECTOR:
                    fieldComponent = (
                      <SelectPicker
                        {...(fieldProps as SelectPickerProps<any>)}
                        selectedValue={values[name]}
                        onChangeSelected={(item: any) =>
                          setFieldValue(name, item.value)
                        }
                      />
                    );
                    break;

                  case FieldTypes.DATE:
                    fieldComponent = (
                      <DatePicker
                        {...(fieldProps as BaseInputProps)}
                        error={commonInputProps.error}
                        onClose={() => setFieldTouched(name)}
                        value={(values as InputFieldValues)[name]}
                        onChangeDate={date => setFieldValue(name, date)}
                      />
                    );
                    break;

                  case FieldTypes.SELECTOR:
                    fieldComponent = (
                      <SelectorInput
                        {...(fieldProps as SelectPickerProps<any>)}
                        selectedValue={(values as SelectorFiledValues)[name]}
                        onChangeSelected={(item: any) =>
                          setFieldValue(name, item)
                        }
                      />
                    );
                    break;

                  case FieldTypes.PIN:
                    fieldComponent = (
                      <PinInput
                        {...(fieldProps as PinFormFieldProps)}
                        descriptionComponent={
                          <Typography size={14} style={styles.descriptionTitle}>
                            {(fieldProps as PinFormFieldProps).label}
                          </Typography>
                        }
                        pin={(values as PinFieldValues)[name]}
                        onPinChange={(item: string) =>
                          setFieldValue(name, item)
                        }
                        errorMessage={errors[name] as string}
                      />
                    );
                    break;
                  case FieldTypes.DROP_DOWN:
                    fieldComponent = (
                      <DropdownComponent
                        {...(fieldProps as DropdownProps)}
                        value={values?.[name]}
                        onChange={(item: DropdownItem) =>
                          setFieldValue(name, item.value)
                        }
                      />
                    );
                    break;
                  // case FieldTypes.DROP_DOWN:
                  //   fieldComponent = (
                  //     <DropdownComponent
                  //       {...(fieldProps as SelectPickerProps<any>)}
                  //       data={data}
                  //       value={values[value]}
                  //       onChange={(item: any) => setFieldValue(value, item.value)} // Handle value change
                  //       error={commonInputProps.error}
                  //     />
                  //   );
                  //   break;

                  default:
                    break;
                }

                return (
                  <View key={name}>
                    {fieldComponent}
                    {AdditionalComponent && (
                      <AdditionalComponent
                        value={values[name]}
                        {...additionalComponentProps}
                      />
                    )}
                  </View>
                );
              }
            })}
          </View>
          {!hideSubmit && (
            <View
              style={[
                styling.rowHCenter,
                buttonLocation === 'beneath' && styles.buttonContainer,
              ]}>
              <Button
                disabled={!isValid || !canProceed}
                onPress={() => {
                  handleSubmit();
                }}
                title={submitButtonText}
                style={[submitButtonStyle, styling.fill]}
                testingSuffix={submitButtonText}
              />
              {AdditionalButton && <AdditionalButton />}
            </View>
          )}
        </View>
      )}
    </Formik>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {paddingTop: 20},
  descriptionTitle: {
    marginBottom: 8,
  },
});
