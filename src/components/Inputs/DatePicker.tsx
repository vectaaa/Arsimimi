import React from 'react';
import { TextInputProps, View } from 'react-native';
// import { Icons } from '../../Theme/Icons';
import { formatDatePickerDate } from '../../Utils/momentum';
// import { DatePickerModal } from '../Modals/DatePickerModal';
import { BaseInput } from './BaseInputs';
import { stylesInput } from '../../components/Inputs/styles';

export type DatePickerProps = TextInputProps & {
  value: string;
  label?: string;
  error?: string;
  passwordVisibility?: boolean;
  onChangeDate?: (date: string) => void;
  onClose: () => void;
  minDate?: Date;
  maxDate?: Date;
};

export const DatePicker = ({
  value,
  // onChangeDate,
  // minDate,
  // maxDate = new Date(),
  // onClose,
  editable = true,
  ...restProps
}: DatePickerProps) => {
  // const [showDatePicker, setShowDatePicker] = useState(false);

  // const handleDateOpen = () => setShowDatePicker(true);

  // const handleDateClose = () => {
  //   setShowDatePicker(false);
  //   onClose();
  // };

  const date = editable ? formatDatePickerDate(value) : value;
  return (
    <>
      <BaseInput
        pressable={true}
        // onPress={handleDateOpen}
        value={date}
        pointerEvents="none"
        onChangeText={() => {}}
        testingSuffix="Date Picker"
        style={stylesInput.inputWithRightIcon}
        editable={editable}
        {...restProps}
      >
        <View style={[stylesInput.iconWrapper, stylesInput.iconRightWrapper]}>
          {/* <Icons.Calendar width={40} /> */}
        </View>
      </BaseInput>
      {/* {showDatePicker && (
        <DatePickerModal
          value={value}
          isOpen={showDatePicker}
          onClose={handleDateClose}
          onChangeDate={onChangeDate}
          minimumDate={minDate}
          maximumDate={maxDate}
        />
      )} */}
    </>
  );
};
