import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Checkbox} from './Checkbox';
import {COLORS} from '../../Theme/Colors';

export type CheckBoxFormProps = {
  label: string;
  options: string[];
  onSelectionChange?: (selected: string) => void;
};

const CheckBoxForm: React.FC<CheckBoxFormProps> = ({
  label,
  options,
  onSelectionChange,
}) => {
  const [selectedItems, setSelectedItems] = useState<string>('');

  const handleCheckboxPress = (item: string) => {
    if (selectedItems.includes(item)) {
      setSelectedItems('');
      onSelectionChange && onSelectionChange('');
    } else {
      setSelectedItems(item);
      onSelectionChange && onSelectionChange(item);
    }
  };

  return (
    <View>
      <Text style={styles.labelStyle}>{label}</Text>
      <View style={styles.container}>
        <FlatList
          data={options}
          renderItem={({item, index}) => (
            <View style={styles.seperatorSpace}>
              <View style={styles.innerContainer}>
                <Checkbox
                  onPress={() => handleCheckboxPress(item)}
                  isActive={selectedItems.includes(item)}
                />
                <Text style={styles.textStyle}>{item}</Text>
              </View>
              {index !== options.length - 1 && (
                <View style={styles.separator} />
              )}
            </View>
          )}
          keyExtractor={item => item}
        />
      </View>
    </View>
  );
};

export default CheckBoxForm;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    borderWidth: 0.6,
    borderRadius: 4,
    marginHorizontal: 12,
    marginVertical: 12,
    borderColor: COLORS.BORDERGREY,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 10,
  },
  seperatorSpace: {},
  labelStyle: {
    marginHorizontal: 14,
    color: COLORS.BORDERBLACK,
    fontFamily: 'georgia',
    fontWeight: '400',
  },
  textStyle: {
    color: COLORS.ORANGE_THICK,
    fontFamily: 'georgia',
    fontWeight: '400',
    marginLeft: 10,
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: COLORS.BORDERGREY,
  },
});
