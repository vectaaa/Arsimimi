import React from 'react';
import { View, TextInput, StyleProp, TextStyle, TextInputProps } from 'react-native';
import { COLORS } from '../../../Theme/Colors';
import { PressableOpacity } from '../../../components/Buttons/PressebleOpacity';
import { stylesInput } from '../styles';
import { Typography } from '../../../components/Typography';
import { styling } from '../../../Theme/Styles/GlobalStyles';
import { Icons } from '../../../Theme/Icons';
import { Spacer } from '../../../components/Spacer';

export type BaseInputProps = Omit<TextInputProps, 'onChangeText'> & {
  onChangeText: (text: string) => void;
  label?: string;
  labelSuffix?: React.ReactNode;
  error?: string;
  style?: StyleProp<TextStyle>;
  children?: React.ReactNode[] | React.ReactNode;
  pressable?: boolean;
  onPress?: (event: any) => void;
  isFocused?: boolean;
  shadow?: boolean;
  withoutError?: boolean;
  info?: string;
  infoWithIcon?: boolean;
  inputRef?: React.RefObject<TextInput>;
  testingSuffix?: string;
  prefixComponent?: React.ReactNode;
  suffixComponent?: React.ReactNode;
  inputField?: React.ReactNode;
};

export const BaseInput = ({
  label,
  error,
  style,
  children,
  pressable,
  onPress,
  isFocused,
  withoutError,
  info,
  editable = true,
  inputRef,
  testingSuffix,
  infoWithIcon = true,
  inputField,
  ...restProps
}: BaseInputProps) => {
  const renderLabel = () => (
    <View style={[styling.row, styling.justifyContentBetween]}>
      <Typography size={14} style={stylesInput.inputLabel}>
        {label}
      </Typography>
      {restProps.labelSuffix}
    </View>
  );

  const renderBottomError = () => (
    <View style={stylesInput.bottomInfoContainer}>
      <Typography size={12} color={COLORS.RED_NORMAL}>
        {error || ' '}
      </Typography>
    </View>
  );

  const renderBottomInfo = () => {
    return (
      <View style={stylesInput.bottomInfoContainer}>
        <View style={stylesInput.hint}>
          {
          infoWithIcon && 
          <Icons.Info />
          }
          <Typography color={COLORS.WHITE_DARK_ACTIVE} size={12} style={stylesInput.hintText}>
            {info || ''}
          </Typography>
        </View>
      </View>
    );
  };

  const renderBaseInput = () => (
    <View
      style={[
        styling.rowHCenter,
        editable && stylesInput.bordered,
        stylesInput.container,
        !withoutError && !!error && stylesInput.errorContainer,
        !editable && stylesInput.disabledInput,
        isFocused && { borderColor: COLORS.TEAL_LIGHT_ACTIVE },
      ]}
    >
      {restProps.prefixComponent && restProps.prefixComponent}
      {inputField || (
        <TextInput
          ref={inputRef}
          style={[stylesInput.baseTextInput, styling.fill, style]}
          placeholderTextColor={COLORS.WHITE_DARK_HOVER}
          selectionColor={COLORS.TEAL_NORMAL}
          editable={editable}
          {...restProps}
          testID={`${label || testingSuffix} Input`}
          accessibilityLabel={`${label || testingSuffix} Input`}
        />
      )}
      {restProps.suffixComponent && restProps.suffixComponent}
    </View>
  );

  const renderInput = () => {
    return pressable ? (
      <PressableOpacity
        disabled={!editable}
        onPress={onPress}
        testingSuffix={`${label || testingSuffix} Press On Input`}
      >
        <View pointerEvents="none">{renderBaseInput()}</View>

        {children}
      </PressableOpacity>
    ) : (
      <View>
        {renderBaseInput()}
        {children}
      </View>
    );
  };

  return (
    <View>
      {label && renderLabel()}
      {renderInput()}
      {info && renderBottomInfo()}
      {!withoutError && renderBottomError()}
      {info && !withoutError && <Spacer height={20} />}
    </View>
  );
};
