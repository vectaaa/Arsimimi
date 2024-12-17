import {
  AirtimeDataBeneficiary,
  Beneficiary,
  BillsBeneficiary,
  TransferBeneficiary,
} from '../../Types/BeneficiaryService';
import {BeneficiaryType} from '../../Types/Common';

export const getBeneficiaryItemMiddle = (
  type: BeneficiaryType,
  item: Beneficiary,
) => {
  switch (type) {
    case BeneficiaryType.AirtimeAndData:
      return `${(item as AirtimeDataBeneficiary).referenceNumber}`;
    case BeneficiaryType.OwnBank:
    case BeneficiaryType.Transfer:
      const transferBeneficiary = item as TransferBeneficiary;
      return `${transferBeneficiary.bankName} • ${transferBeneficiary.accountNumber}`;
    case BeneficiaryType.Bills:
      const billsBeneficiary = item as BillsBeneficiary;
      return `${billsBeneficiary.referenceNumber}`;
    default:
      return '';
  }
};
