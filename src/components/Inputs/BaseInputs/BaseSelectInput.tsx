import React from 'react';
import { View } from 'react-native';
// import { GLOBALS } from '../../../Constants/Globals';
// import { Icons } from '../../../Theme/Icons';
import { BaseInput } from '../BaseInputs/index';
import { stylesInput } from '../styles';

export type BaseSelectInputProps = {
  label: string;
  disabled?: boolean;
  placeholder?: string;
  value?: string;
  error?: string;
  onPress?: () => void;
};

export const BaseSelectInput = ({
  onPress,
  disabled = false,
  value,
  label,
  placeholder,
  error,
}: BaseSelectInputProps) => {
  return (
    <BaseInput
      pressable
      value={value}
      placeholder={placeholder}
      style={stylesInput.inputWithRightIcon}
      error={error}
      label={label}
      onPress={onPress}
      editable={!disabled}
      onChangeText={() => {}}
      testingSuffix={`Select ${label}`}
    >
      <View style={[stylesInput.iconWrapper, stylesInput.iconRightWrapper]}>
        {/* <Icons.ArrowDown {...GLOBALS.ICON_SIZE} /> */}
      </View>
    </BaseInput>
  );
};
