import { GenericResponse, TransferType } from './Common';

export interface BaseBeneficiary {
  id: number;
  name: string;
  alias: string | null;
}

export interface TransferBeneficiary extends BaseBeneficiary {
  transferType: TransferType;
  bankCode: string;
  bankName: string;
  accountNumber: string;
  bvn: string | null;
  imageType: string | null;
  imageString: string | null;
  favourite: boolean;
  currencyCode: string;
  institution: {
    id: number;
    name: string;
    code: string;
    bankCode: string;
  };
}

export interface AirtimeDataBeneficiary extends BaseBeneficiary {
  id: number;
  customer: null;
  billerCode: string;
  referenceNumber: string; // tel number
  categoryId: string;
  categoryName: string;
  type: 0;
  billerId: string;
  bIllType: string;
}

export interface BillsBeneficiary extends BaseBeneficiary {
  customer: null;
  billerCode: string;
  referenceNumber: string;
  categoryId: string;
  categoryName: string;
  type: 1;
  billerId: string | null;
  bIllType: string;
}

export type Beneficiary = TransferBeneficiary | AirtimeDataBeneficiary | BillsBeneficiary;

export type GetBeneficiariesResponse = GenericResponse & {
  beneficiaries: Beneficiary[];
};

export type AddTransferBeneficiaryResponse = GenericResponse & { data: TransferBeneficiary };
export type AddTransferBeneficiaryData = {
  accountNumber: string;
  name: string;
  transferType: 'local' | 'interbank';
  bankCode: string;
  bvn?: string;
  bankName: string;
  accountName: string;
  pin: string;
  alias?: string;
};

export type EditTransferBeneficiaryResponse = AddTransferBeneficiaryResponse;
export type EditTransferBeneficiaryData = {
  bankCode: string;
  accountNumber: string;
  alias: string;
};

export type DeleteTransferBeneficiaryData = {
  bankCode: string;
  accountNumber: string;
  transferType: 'local' | 'interbank';
};

export type GetBillsBeneficiariesResponse = GenericResponse & {
  beneficiaries: BillsBeneficiary[];
};

export type ResponseBillsBeneficiary = BillsBeneficiary;
export type AddBillsBeneficiaryResponse = GenericResponse & {
  data: ResponseBillsBeneficiary;
};
export type AddBillsBeneficiaryData = {
  billerCode: string;
  categoryId: string;
  billerId: string;
  referenceNumber: string;
  alias: string;
  name: string;
  pin: string;
  categoryName: string;
};

export type EditBillsBeneficiaryResponse = GenericResponse & {
  data: BillsBeneficiary;
};
export type EditBillsBeneficiaryData = {
  billerCode: string;
  categoryId: string;
  referenceNumber: string;
  alias: string;
  name: string;
  billerId: string;
};

export type DeleteBillsBeneficiaryResponse = GenericResponse & { data: null };
export type DeleteBillsBeneficiaryData = {
  billerCode: string;
  referenceNumber: string;
};

export type UpdateTransferBeneficiaryAsFavouriteResponse = GenericResponse & {
  data: TransferBeneficiary;
};

export type DeleteTransferBeneficiaryAsFavouriteResponse = GenericResponse;

export type UpdateBillsBeneficiaryAsFavouriteResponse = GenericResponse & {
  data: BillsBeneficiary;
};

export type DeleteFavouriteBillsBeneficiary = GenericResponse & { data: null };

export type GetAirtimeBeneficiariesResponse = GenericResponse & {
  beneficiaries: AirtimeDataBeneficiary[];
};

export type AddAirtimeBeneficiaryData = {
  billerCode: string;
  categoryId: string;
  phoneNumber: string;
  alias: string | null;
  pin: string;
  name: string;
  imageString: string | null;
  billerId: string;
  categoryName: string;
  imageType: string;
};

export type EditAirtimeBeneficiaryData = {
  billerCode: string;
  categoryId: string;
  phoneNumber: string;
  alias: string | null;
  name: string;
  imageString: string | null;
  billerId: string;
};

export type DeleteAiritmeBeneficiaryData = {
  phoneNumber: string;
  institutionCD: string;
};

export type GetInfoResponse = GenericResponse & {
  conditions: string;
};
