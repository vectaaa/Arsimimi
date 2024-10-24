import React, { useEffect, useState } from 'react';
import { ListRenderItem, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';

import { SelectProps } from './types';
import { findObjectsBySubstringInSpecificFields } from '../../Utils/technical';
import { BaseList } from '../BaseList';
import { SearchInput } from '../../components/Inputs/BaseInputs/SearchInput';
import { BaseListItem } from '../BaseListItem';

import { BeneficiaryType } from '../../Types/Common';
import { Beneficiary } from '../../Types/BeneficiaryService';

export function SelectPickerModal<Option>({
  options,
  searchEnabled,
  searchPlaceholder,
  searchFields,
  selectorType,
  renderItem,
  onChangeSelected,
  itemHeaderFiled,
  selectedQuestions,
  ...restProps
}: Omit<SelectProps<Option>, 'selectedValue' | 'valueField' | 'modalTitle'>) {
  const navigation = useNavigation();
  const [data, setData] = useState(options);

  const handleOnSearch = (text: string) => {
    if (searchFields) {
      const newText = text.toLowerCase();

      if (!text.length) {
        setData(options);
      }

      const filteredOptions = findObjectsBySubstringInSpecificFields(
        options,
        searchFields,
        newText
      );
      setData(filteredOptions);
    }
  };
  const handleSelect = (item: any) => {
    navigation.goBack();
    onChangeSelected?.(item);
  };

  const renderSpecificItem = (item: any) => {
    switch (selectorType) {
      case 'account':
        return <AccountItem key={item} item={item} onPress={() => handleSelect(item)} />;

      case 'bank':
        return <BankItem key={item} item={item} onPress={() => handleSelect(item)} />;
      case 'obBank':
        return <OpenBankingBankItem key={item} item={item} onPress={() => handleSelect(item)} />;

      case 'transferBeneficiary':
        return (
          <BeneficiaryItem
            key={item}
            type={BeneficiaryType.Transfer}
            item={item}
            onPress={() => handleSelect(item)}
          />
        );

      case 'airtimeBeneficiary':
        return (
          <BeneficiaryItem
            key={item}
            type={BeneficiaryType.AirtimeAndData}
            item={item}
            onPress={() => handleSelect(item)}
          />
        );

      case 'billsBeneficiary':
        return (
          <BeneficiaryItem
            key={(item as Beneficiary).id}
            type={BeneficiaryType.Bills}
            item={item}
            onPress={() => handleSelect(item)}
          />
        );

      case 'product':
        return <ProductItem key={item} item={item} onPress={() => handleSelect(item)} />;

      case 'biller':
        return <BillerItem key={item} item={item} onPress={() => handleSelect(item)} />;
      case 'securityQuestions':
        return (
          <SecurityQuestionItem
            key={item.index}
            item={item}
            onPress={() => handleSelect(item)}
            isSelected={selectedQuestions?.includes(item.index) ?? false}
          />
        );
    }
  };

  const renderListItem: ListRenderItem<Option> = ({ item }) => (
    <>
      <Pressable onPress={() => handleSelect(item)}>{renderItem?.(item)}</Pressable>
      {!!selectorType && renderSpecificItem(item)}
      {!renderItem && !selectorType && !!itemHeaderFiled && (
        <BaseListItem
          onPress={() => handleSelect(item)}
          header={item[itemHeaderFiled]}
          pressable
          testingSuffix={`Select ${item[itemHeaderFiled]}`}
        />
      )}
      {!renderItem && !selectorType && typeof item !== 'object' && (
        <BaseListItem
          onPress={() => handleSelect(item)}
          header={item}
          pressable
          testingSuffix={`Select ${item}`}
        />
      )}
    </>
  );

  useEffect(() => {
    setData(options);
  }, [options]);

  return (
    <>
      {searchEnabled && (
        <SearchInput
          placeholder={searchPlaceholder}
          onChangeText={handleOnSearch}
          testingSuffix="Select Picker Modal Search"
        />
      )}

      {<BaseList data={data} renderItem={renderListItem} {...restProps} />}
    </>
  );
}
