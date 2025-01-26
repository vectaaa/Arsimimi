import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import {Checkbox} from './Checkbox';


export type CheckBoxFormProps = {
  level: string;
};

const CheckBoxForm = (label: string) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([]);

  const checkboxFields: CheckBoxFormProps[] = [
    {level: 'Primary School'},
    {level: 'Junior Secondary School'},
    {level: 'Senior Secondary School'},
    {level: 'Professional Exam'},
  ];

  const handleCheckboxPress = (item: CheckBoxFormProps) => {
    if (selectedItems.includes(item.level)) {
      setSelectedItems(selectedItems.filter(level => level !== item.level));
    } else {
      setSelectedItems([...selectedItems, item.level]);
    }
  };

  return (
    <View>
      <Text>{label}</Text>
      <View style={styles.container}>
        <FlatList
          data={checkboxFields}
          renderItem={({item}) => (
            <View style={styles.innerContainer}>
              <Checkbox
                onPress={() => handleCheckboxPress(item)}
                isActive={selectedItems.includes(item.level)}
              />
              <Text>{item.level}</Text>
            </View>
          )}
          keyExtractor={item => item.level}
        />
      </View>
    </View>
  );
};

export default CheckBoxForm;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    gap: 8,
    borderWidth: 0.6,
    borderRadius: 4,
  },
  innerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
