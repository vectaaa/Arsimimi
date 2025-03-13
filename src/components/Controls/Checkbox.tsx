import {StyleSheet, TextStyle, ViewStyle} from 'react-native';
import React, {ReactNode} from 'react';
import {COLORS} from '../../Theme/Colors';
import {Typography} from '../../Typography';
import {PressableOpacity} from '../Buttons/PressebleOpacity';
import {styling} from '../../Theme/Styles/GlobalStyles';
import {Spacer} from '../Spacer';
import {Icons} from '../../Theme/Icons';

export type CheckboxProps = {
  isActive: boolean;
  onPress(): void;
  label?: string;
  customComponent?: ReactNode;
  checkboxPosition?: 'left' | 'right';
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify' | undefined;
  showError?: boolean;
  pressEventOnBoxOnly?: boolean;
  labelStyle?: TextStyle;
  style?: ViewStyle;
};

export const Checkbox = ({
  isActive,
  onPress,
  label = '',
  customComponent,
  checkboxPosition = 'left',
  textAlign = 'auto',
  showError = false,
  pressEventOnBoxOnly = false,
  labelStyle,
  style,
}: CheckboxProps) => {
  return (
    <PressableOpacity
      disabled={pressEventOnBoxOnly}
      onPress={onPress}
      testingSuffix={`Checkmark Container ${label}`}
      style={[
        styling.rowHCenter,
        // styling.componentMargin,
        checkboxPosition === 'right' && styling.rowReverse,
        style,
      ]}>
      <PressableOpacity
        disabled={!pressEventOnBoxOnly}
        onPress={onPress}
        testingSuffix={`Checkmark ${label}`}
        style={[
          styles.outerCircle,
          styles.border,
          showError && styles.outerCircleError,
        ]}>
        {isActive && (
          <Icons.Checkmark
            style={styles.checkmark}
            width={12}
            height={12}
            color={COLORS.BLACK_NORMAL}
          />
        )}
      </PressableOpacity>
      <Spacer width={8} />
      {customComponent ? (
        customComponent
      ) : (
        <Typography size={12} style={[styling.fill, {textAlign}, labelStyle]}>
          {label}
        </Typography>
      )}
    </PressableOpacity>
  );
};

const styles = StyleSheet.create({
  outerCircle: {
    height: 20,
    width: 20,
    borderWidth: 1.1,
    borderColor: COLORS.WHITE_NORMAL_HOVER,
    justifyContent: 'center',
    alignItems: 'center',
  },
  outerCircleError: {
    borderColor: COLORS.RED_NORMAL,
  },
  checkmark: {
    position: 'absolute',
  },
  border: {
    borderColor: COLORS.BLACK,
  },
});
