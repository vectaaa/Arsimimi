import {Keyboard, StyleProp, StyleSheet, Text, View, ViewStyle} from 'react-native';
import React, { useEffect, useState } from 'react';
import { Typography } from '../../Typography';
import { COLORS } from '../../Theme/Colors';
import { CodeField, isLastFilledCell, MaskSymbol, useBlurOnFulfill, useClearByFocusCell } from 'react-native-confirmation-code-field';
import { GLOBALS } from '../../Constants/Globals';
import { withOpacity } from '../../Utils/withOpacity';

export const PIN_FIELD_SIZE = 48; 
export type PinInputProps = {
  pin: string;
  onPinChange(pin: string): void;
  length?: number;
  autoFocus?: boolean;
  onCompleteInput?(pin: string): void;
  containerStyle?: StyleProp<ViewStyle>;
  pinBoxStyle?: StyleProp<ViewStyle>;
  descriptionComponent?: React.ReactNode;
  hideText?: boolean;
  errorMessage?: string;
};

export const PinInput = ({
  pin = '',
  onPinChange,
  length = GLOBALS.PIN_LENGTH,
  autoFocus,
  onCompleteInput,
  containerStyle,
  pinBoxStyle,
  descriptionComponent,
  hideText = true,
  errorMessage,
}: PinInputProps) => {
  const ref = useBlurOnFulfill({value: pin, cellCount: length});
  const [invalid, setInvalid] = useState(false);

  const [hookProps, getCellOnLayoutHandler] = useClearByFocusCell({
    value: pin,
    setValue: onPinChange,
  });
  const commonStyle = [
    styles.cell,
    pinBoxStyle,
    invalid ? styles.cellInvalid : {},
  ];

  useEffect(() => {
    if (pin.length === length) {
      onCompleteInput?.(pin);
      setInvalid(!!errorMessage);
    } else {
      if (invalid) {
        setInvalid(false);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pin, errorMessage]);

  return (
    <View style={styles.container}>
      {descriptionComponent && descriptionComponent}
      <CodeField
        ref={ref}
        {...hookProps}
        value={pin}
        onChangeText={onPinChange}
        cellCount={length}
        rootStyle={containerStyle}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        autoFocus={autoFocus}
        onSubmitEditing={Keyboard.dismiss}
        testID="Pin Input"
        accessibilityLabel="Pin Input"
        renderCell={({index, symbol, isFocused}) => {
          return (
            <View
              key={index}
              style={[
                commonStyle,
                isFocused && styles.focusedCell,
                index < pin.length && !invalid && styles.cellEntered,
              ]}>
              <Text
                style={[styles.text, isFocused && styles.innerActiveCell]}
                onLayout={() => getCellOnLayoutHandler(index)}>
                {symbol && hideText ? (
                  <MaskSymbol
                    maskSymbol="●"
                    delay={0}
                    isLastFilledCell={isLastFilledCell({index, value: pin})}>
                    {symbol}
                  </MaskSymbol>
                ) : symbol && !hideText ? (
                  symbol
                ) : null}
              </Text>
            </View>
          );
        }}
      />
      {errorMessage && (
        <Typography style={styles.errorMessage}>{errorMessage}</Typography>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
        marginBottom: 16,
      },
      cell: {
        borderColor: COLORS.WHITE_NORMAL_HOVER,
        borderWidth: 1.5,
        borderRadius: 4,
        height: 48,
        width: 48,
      },
      text: {
        alignSelf: 'center',
        backgroundColor: COLORS.WHITE_LIGHT,
        fontFamily: 'Swiss721BT-Roman',
        fontSize: 14,
        textAlign: 'center',
        height: PIN_FIELD_SIZE - 4,
        width: PIN_FIELD_SIZE - 4,
        lineHeight: PIN_FIELD_SIZE - 4,
      },
      innerActiveCell: {
        borderWidth: 1,
        borderColor: COLORS.TEAL_NORMAL,
        borderRadius: 4,
        height: 46,
        width: 46,
      },
      cellInvalid: {
        borderColor: COLORS.RED_NORMAL,
      },
      focusedCell: {
        borderColor: withOpacity(COLORS.BLACK, 0.2),
        elevation: 3,
        shadowColor: COLORS.SHADOW,
        shadowOffset: { width: 0, height: 0 },
        shadowRadius: 2,
        shadowOpacity: 0.2,
      },
      cellEntered: {
        borderColor: COLORS.TEAL_LIGHT_ACTIVE,
      },
      errorMessage: { paddingTop: 2, paddingLeft: 2, fontSize: 12, color: COLORS.RED_NORMAL },
});
