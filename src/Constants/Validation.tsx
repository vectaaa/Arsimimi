import {object, string, date, boolean, ref} from 'yup';
import moment from 'moment';
import i18n from '../Translations';
// import {Range} from '../Types/Common';

export const FROM_ACC_NAME = 'fromAccount';
export const ACC_NUMBER_LENGTH = 10;
export const PHONE_NUMBER_LENGTH = 11;
export const PASS_MAX_LENGTH = 20;
const MIN_AMOUNT = 10;
const ALLOWED_AGE = 18;
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRules = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{5,}$/;
// min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit.

export const VALIDATION = {
  stringRequired: string().required(' '),
  objectRequired: object().required(' '),
  booleanIsTrue: boolean().isTrue(),
  dateOfBirth: date()
    .required(' ')
    .max(
      moment().endOf('day').subtract(ALLOWED_AGE, 'years'),
      i18n.t('validation.minAge', {minAge: ALLOWED_AGE}),
    ),

  email: string()
  .matches(emailRegex, {message: 'Please input a valid Email Address' })
  .required('Email is required'),
  // .email('Enter a valid email'),
  password: string()
    .min(5)
    .matches(passwordRules, {message: 'min 5 characters, 1 upper case letter, 1 lower case letter, 1 numeric digit'})
    .required(''),
    confirmPassword: string()
    .oneOf([ref('password'), null], 'Passwords must match')
    .required(''),

  billsAmount: (minAmount?: number, maxAmount?: number, charge?: number) =>
    string()
      .required(' ')
      .test(
        'amountLimits',
        i18n.t('validation.amountLimits', {minAmount, maxAmount}),
        value => {
          if (minAmount !== undefined && maxAmount !== undefined) {
            return (
              value !== undefined &&
              Number(value) >= minAmount &&
              Number(value) <= maxAmount
            );
          }
          return true;
        },
      )
      .test(
        'minAmount',
        i18n.t('validation.minAmount', {minAmount: MIN_AMOUNT}),
        value => {
          return value !== undefined && Number(value) >= MIN_AMOUNT;
        },
      )
      .test(
        'balanceAmount',
        i18n.t('validation.amountAccountBalance'),
        (value, context) => {
          if (charge && value !== undefined) {
            const totalAmount = Number(value) + charge;
            return (
              totalAmount <= context.parent[FROM_ACC_NAME]?.availableBalance
            );
          }
          return (
            value !== undefined &&
            Number(value) <= context.parent[FROM_ACC_NAME]?.availableBalance
          );
        },
      ),
  username: string()
    .required(' ')
    .matches(/^[a-zA-Z0-9.]+$/, i18n.t('validation.usernameAllowedCharacters'))
    .notOneOf(
      ['&', '=', '_', "'", '-', '+', ',', '<', '>'],
      i18n.t('validation.invalidCharacters'),
    )
    .test(
      'no-consecutive-periods',
      i18n.t('validation.subsequentPeriods'),
      value => !value?.includes('..'),
    ),
  maximum: (maxValue: number, errorMessage?: string) =>
    string()
      .required()
      .test(
        'maxAmount',
        errorMessage || i18n.t('validation.maxAmount', {maxAmount: maxValue}),
        value => {
          return value !== undefined && Number(value) <= maxValue;
        },
      ),
  lessThanField: (field: string, errorMessage?: string) =>
    string()
      .required()
      .test(
        'lessThanField',
        errorMessage || i18n.t('validation.lessThan', {field}),
        (value, context) => {
          return value !== undefined && Number(value) <= context.parent[field];
        },
      ),
  description: string().test(
    'minimumThreeCharacters',
    i18n.t('validation.description'),
    value => {
      if (value) {
        return value.length >= 3;
      } else {
        return true;
      }
    },
  ),
  nickname: string()
    .required(' ')
    .matches(
      /^[A-Za-z][A-Za-z0-9\s]*$/,
      i18n.t('validation.nicknameAllowedCharacters'),
    ),
};
