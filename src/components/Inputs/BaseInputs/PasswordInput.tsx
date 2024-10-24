import React, { useState } from 'react';
import { Text, View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { PressableOpacity } from '../../Buttons/PressebleOpacity';
// import { GLOBALS } from '../../../Constants/Globals';
import { PASS_MAX_LENGTH } from '../../../Constants/Validation';
// import { Icons } from '../../../Theme/Icons';
import { BaseInput, BaseInputProps } from './index';
import { stylesInput } from '../styles';

const HIT_SLOP_SCALE = {
  top: 10,
  bottom: 10,
  right: 10,
  left: 10,
};

export const PasswordInput = ({ label, withoutError, error, ...props }: BaseInputProps) => {
  const [passwordHidden, setPasswordHidden] = useState(true);
  const { t } = useTranslation();

  const togglePasswordVisibility = () => {
    setPasswordHidden(!passwordHidden);
  };

  return (
    <BaseInput
      secureTextEntry={passwordHidden}
      maxLength={PASS_MAX_LENGTH}
      label={label || t('forms.password.label')}
      placeholder={t('forms.password.placeholder')}
      style={stylesInput.inputWithRightIcon}
      withoutError={withoutError}
      error={error}
      {...props}
    >
      <View style={[stylesInput.iconWrapper, stylesInput.iconRightWrapper]}>
        <PressableOpacity
          hitSlop={HIT_SLOP_SCALE}
          onPress={togglePasswordVisibility}
          testingSuffix={`${label || t('forms.password.label')} Toggle Password Visibility Button`}
        >
          {passwordHidden ? (
            <Text>Hidden</Text>
            // <Icons.PasswordHidden width={24} height={24} />
          ) : (
            <Text>Visible</Text>
            // <Icons.PasswordVisible width={24} height={24} />
          )}
        </PressableOpacity>
      </View>
    </BaseInput>
  );
};
