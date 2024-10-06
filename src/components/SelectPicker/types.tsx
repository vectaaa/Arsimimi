import { BaseListProps } from '@/Components/BaseList';
import { BoxSelectInputProps } from '@/Components/Inputs/BoxInputs/BoxSelectInput';

export type SelectPickerListRenderItem<T> = (item: T) => React.ReactNode;

type BaseSelectProps<Option> = {
  options: Option[];
  selectedValue?: any;
  valueField?: keyof Option;
  modalTitle?: string;
  itemHeaderFiled?: keyof Option;
  searchEnabled?: boolean;
  searchFields?: ReadonlyArray<keyof Option>;
  searchPlaceholder?: string;
  isBaseInput?: boolean;
  onChangeSelected: (item: Option) => void;
  onSelect?: (item: Option) => void;
  renderItem?: SelectPickerListRenderItem<Option>;
};

type SecurityQuestionsSelectProps<Option> = BaseSelectProps<Option> & {
  selectorType: 'securityQuestions';
  selectedQuestions: any[];
};

type NonSecurityQuestionsSelectProps<Option> = BaseSelectProps<Option> & {
  selectorType?:
    | 'account'
    | 'bank'
    | 'transferBeneficiary'
    | 'airtimeBeneficiary'
    | 'billsBeneficiary'
    | 'biller'
    | 'product'
    | 'amount'
    | 'obBank';
  selectedQuestions?: never;
};

export type SelectProps<Option> =
  | SecurityQuestionsSelectProps<Option>
  | NonSecurityQuestionsSelectProps<Option>;

export type SelectPickerProps<Option> = BoxSelectInputProps &
  SelectProps<Option> &
  Omit<BaseListProps<Option>, 'data'>;