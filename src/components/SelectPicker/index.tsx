import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {useTranslation} from 'react-i18next';
import {BaseSelectInput} from '../../components/Inputs/BaseInputs/BaseSelectInput';
import {SelectPickerModal} from './SelectPickerModal';
import {SelectPickerProps} from './types';

export function SelectPicker<Option>({
  options,
  label,
  placeholder,
  error,
  selectedValue,
  valueField,
  itemHeaderFiled,
  searchEnabled,
  searchFields,
  modalTitle,
  selectorType,
  searchPlaceholder,
  isBaseInput = true,
  onChangeSelected,
  onPress,
  onSelect,
  renderItem,
  bottomInfo,
  disabled,
  ...restProps
}: SelectPickerProps<Option>) {
  const {t} = useTranslation();
  const navigation = useNavigation();

  const isAccount = selectorType === 'account';

  const specificPlaceholder = isAccount
    ? t('accountSelector.selectorPlaceholder')
    : t('accountSelector.modalTitleBeneficiary');

  const specificModalTitle = isAccount
    ? t('accountSelector.modalTitleAccount')
    : t('accountSelector.modalTitleBeneficiary');

  const selectorContent = (
    <SelectPickerModal
      options={options}
      searchEnabled={searchEnabled}
      searchPlaceholder={searchPlaceholder}
      searchFields={searchFields}
      selectorType={selectorType}
      renderItem={renderItem}
      onChangeSelected={item => {
        onSelect?.(item);
        onChangeSelected(item);
      }}
      itemHeaderFiled={itemHeaderFiled}
      {...restProps}
    />
  );

  const openModal = () => {
    onPress?.();
    navigation.navigate('BottomSheetModal', {
      title: modalTitle || (selectorType && specificModalTitle),
      fixedHeight: searchEnabled,
      children: selectorContent,
    });
  };

  return (
    <BaseSelectInput
      value={
        typeof selectedValue === 'object'
          ? selectedValue?.[valueField]
          : selectedValue
      }
      label={label || (!!selectorType && t('transfers.to')) || ''}
      placeholder={placeholder || specificPlaceholder}
      onPress={openModal}
      error={error}
      disabled={disabled}
    />
    )
}
