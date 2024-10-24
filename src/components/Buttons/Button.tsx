import React from 'react';
import { ColorValue, View } from 'react-native';
import { StyleProp, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '../../Theme/Colors';
import { Typography } from '../../components/Typography';
import { LoadingSpinner } from '../../components/LoadingSpinner';
import { Spacer } from '../../components/Spacer';
import { PressableOpacity, PressableOpacityProps } from '../Buttons/PressebleOpacity';
import { styling } from '../../Theme/Styles/GlobalStyles';

export type ButtonProps = PressableOpacityProps & {
  title?: string;
  color?: ColorValue;
  outline?: boolean;
  small?: boolean;
  round?: boolean;
  loading?: boolean;
  icon?: React.ReactNode;
  buttonStyle?: StyleProp<ViewStyle>;
  buttonContainerStyle?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
};

export const Button = ({
  title,
  color,
  children,
  disabled = false,
  outline = false,
  small = false,
  round = false,
  loading = false,
  icon,
  style,
  buttonStyle,
  buttonContainerStyle,
  textStyle,
  testingSuffix,
  ...props
}: ButtonProps) => {
  const buttonText = title || (typeof children === 'string' ? children : '');

  const buttonContainerStyles = StyleSheet.flatten([
    styles.buttonContainer,
    small && { alignItems: 'center' },
    style,
  ]);

  const buttonStyles = StyleSheet.flatten([
    styles.button,
    { backgroundColor: color ? color : COLORS.ORANGE_NORMAL },
    disabled && { backgroundColor: COLORS.ORANGE_LIGHT },
    outline && { ...styles.outline, borderColor: color ? color : COLORS.TEAL_NORMAL },
    round && styles.round,
    buttonStyle,
  ]);

  const buttonContentStyles = StyleSheet.flatten([styles.buttonContent, buttonContainerStyle]);

  const textStyles = StyleSheet.flatten([
    styles.defaultTextStyle,
    { color: color && outline ? color : outline ? COLORS.TEAL_NORMAL : COLORS.WHITE },
    textStyle,
  ]);

  return (
    <View style={buttonContainerStyles as ViewStyle}>
      <PressableOpacity
        disabled={disabled || loading}
        style={buttonStyles as ViewStyle}
        {...props}
        testingSuffix={`${testingSuffix} Button`}
      >
        <View style={buttonContentStyles}>
          {icon && icon}
          {icon && children && <Spacer width={8} />}
          {buttonText ? (
            <Typography size={16} weight="400" style={textStyles} numberOfLines={1}>
              {buttonText}
            </Typography>
          ) : (
            <>{children}</>
          )}
        </View>
      </PressableOpacity>
      {loading && (
        <LoadingSpinner
          size={24}
          color={color && outline ? color : outline ? COLORS.TEAL_NORMAL : COLORS.WHITE}
          colorOuterCircle={COLORS.TRANSPARENT}
          hideLogo
          style={styles.loadingIndicator}
        />
      )}
    </View>
  );
};

const MIN_SIZE = 44;

const styles = StyleSheet.create({
  buttonContainer: {
    justifyContent: 'center',
    marginBottom: 24,
  },
  button: {
    ...styling.borderRadius,
    justifyContent: 'center',
    minHeight: MIN_SIZE,
    padding: 12,
  },
  buttonContent: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  defaultTextStyle: {
    flexShrink: 1,
  },
  loadingIndicator: {
    position: 'absolute',
    right: 16,
  },
  outline: {
    backgroundColor: COLORS.TRANSPARENT,
    borderWidth: 1,
  },
  round: {
    borderRadius: MIN_SIZE,
    minWidth: MIN_SIZE,
  },
});
