import {StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Dropdown} from 'react-native-element-dropdown';
import {COLORS} from '../../Theme/Colors';

export type DropdownItem = {
  label: string;
  value: string;
};

type DropdownProps = {
  options: DropdownItem[];
  label: string;
  value: string | null;
  onChange: (item: DropdownItem) => void;
  // onChange: (value: string) => void;
};

const DropdownComponent = ({
  options,
  label,
  value,
  onChange,
}: DropdownProps & {onChange: (item: DropdownItem) => void}) => {
  const [isFocus, setIsFocus] = useState(false);

  const renderLabel = () => <Text style={[styles.label]}>{label}</Text>;

  return (
    <View style={styles.container}>
      {renderLabel()}
      <Dropdown
        style={[styles.dropdown]}
        placeholderStyle={styles.placeholderStyle}
        selectedTextStyle={styles.selectedTextStyle}
        inputSearchStyle={styles.inputSearchStyle}
        iconStyle={styles.iconStyle}
        data={options}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value || null} // Safeguard against undefined
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={(item: DropdownItem) => {
          onChange(item);
          console.log(item.value, 'item');
          // Call the passed onChange handler
          setIsFocus(false);
        }}
      />
    </View>
  );
};
export default DropdownComponent;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.TRANSPARENT,
    padding: 16,
  },
  dropdown: {
    height: 50,
    borderColor: COLORS.BORDERBLACK,
    borderWidth: 0.5,
    borderRadius: 3,
    paddingHorizontal: 8,
  },
  label: {
    backgroundColor: COLORS.TRANSPARENT,
    fontSize: 14,
    marginBottom: 8,
    color: '#848484',
    fontFamily: 'georgia',
  },
  placeholderStyle: {
    fontSize: 14,
    color: '#848484',
    fontFamily: 'georgia',
  },
  selectedTextStyle: {
    fontSize: 16,
    paddingHorizontal: 8,
    fontFamily: 'georgia',
  },
  iconStyle: {
    width: 20,
    height: 20,
  },
  inputSearchStyle: {
    height: 40,
    fontSize: 16,
    fontFamily: 'georgia',
  },
});
