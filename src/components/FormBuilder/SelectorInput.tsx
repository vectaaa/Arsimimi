import { FlatList, StyleSheet, View, useWindowDimensions } from 'react-native';
import React, { useEffect, useState } from 'react';
import { PressableOpacity } from '../Buttons/PressebleOpacity';
import { Spacer } from '../Spacer';
import { Typography } from '../../Typography';
import { COLORS } from '../../Theme/Colors';
import { styling } from '../../Theme/Styles/GlobalStyles';
import { SelectPickerProps } from '../../Components/SelectPicker/types';

export function SelectorInput<Option>({
  options,
  label,
  itemHeaderFiled,
  onSelect,
  onChangeSelected,
  selectedValue,
  numColumns = 2,
}: Omit<SelectPickerProps<Option>, 'selectorType' | 'data'>) {
  const { width } = useWindowDimensions();
  const horizontalSpacing = 12;
  const itemWidth = (width - 32 - (numColumns - 1) * horizontalSpacing) / numColumns;
  const [selected, setSelected] = useState<Option | null>(selectedValue);

  //to update selectedValue if changed externally
  useEffect(() => {
    setSelected(selectedValue);
  }, [selectedValue]);

  return (
    <View>
      {label && <Typography style={styles.label}>{label}</Typography>}
      <View>
        <FlatList
          data={options}
          renderItem={({ item }) => (
            <PressableOpacity
              onPress={() => {
                setSelected(item);
                onChangeSelected(item);
                onSelect && onSelect(item);
              }}
              style={[
                styles.itemContainer,
                item === selected ? styles.selectedItemContainer : styles.unselectedItemContainer,
                { width: itemWidth },
              ]}
              testingSuffix={''}
            >
              <Typography
                color={item === selected ? COLORS.TEAL_NORMAL : COLORS.WHITE_DARK_ACTIVE}
                weight={item === selected ? '700' : '400'}
              >
                {typeof item !== 'object' ? (item as String) : (item![itemHeaderFiled!] as String)}
              </Typography>
            </PressableOpacity>
          )}
          keyExtractor={(item) => options.indexOf(item).toString()}
          numColumns={numColumns}
          columnWrapperStyle={styling.justifyContentBetween}
          scrollEnabled={false}
        />
      </View>
      <Spacer height={16} />
    </View>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    paddingHorizontal: 8,
    paddingVertical: 16,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
    alignContent: 'center',
    marginBottom: 12,
  },
  selectedItemContainer: {
    borderWidth: 1,
    borderColor: COLORS.OLIVE_LIGHT_ACTIVE,
    backgroundColor: COLORS.OLIVE_LIGHT,
  },
  unselectedItemContainer: {
    backgroundColor: COLORS.WHITE_NORMAL,
  },
  label: { paddingBottom: 8 },
});
