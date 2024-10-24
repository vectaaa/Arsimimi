import React from 'react';
import { View } from 'react-native';
import { useTranslation } from 'react-i18next';
import { GLOBALS } from '../../../Constants/Globals';
import { Icons } from '../../../Theme/Icons';
import { BaseInput, BaseInputProps } from './index';
import { stylesInput } from '../styles';
import { COLORS } from '../../../Theme/Colors';

export type SearchInputProps = BaseInputProps & {};

export const SearchInput = (props: SearchInputProps) => {
  const { t } = useTranslation();
  return (
    <BaseInput
      inputRef={props.inputRef}
      style={(stylesInput.inputWithRightIcon, { fontSize: 16 })}
      placeholder={props.placeholder ?? t('forms.search.placeholder')}
      placeholderTextColor={COLORS.WHITE_DARK_HOVER}
      {...props}
    >
      <View style={[stylesInput.iconWrapper, stylesInput.iconRightWrapper]}>
        <Icons.Search {...GLOBALS.ICON_SIZE} />
      </View>
    </BaseInput>
  );
};
