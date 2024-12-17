export const toUpperFirstSign = (value: string = ''): string =>
  value[0].toUpperCase() + value.slice(1).toLowerCase();

export const capitalizeFirstLetter = (value: string) => {
  if (!value) return value;

  // Split by sentence-ending punctuation, keeping the punctuation with each sentence
  const sentences = value.match(/[^.!?]+[.!?]*/g) || [];

  return sentences
    .map(sentence => {
      const trimmed = sentence.trim();
      return trimmed.charAt(0).toUpperCase() + trimmed.slice(1).toLowerCase();
    })
    .join(' ');
};

export const amountToNumber = (value: string): number =>
  parseFloat(value.replace(/[^0-9.-]/g, ''));

export const formatAmount = (
  value: string | number,
  currency?: string,
  withDecimals = false,
) => {
  if (!value && value !== 0) {
    return '';
  }

  if (typeof value === 'string') value = amountToNumber(value);

  const options: Intl.NumberFormatOptions = currency
    ? {
        style: 'currency',
        currency,
        minimumFractionDigits: withDecimals ? 2 : 0,
        maximumFractionDigits: withDecimals ? 2 : 0,
      }
    : {
        minimumFractionDigits: withDecimals ? 2 : 0,
        maximumFractionDigits: withDecimals ? 2 : 0,
      };

  const formattedValue = new Intl.NumberFormat('en-NG', options).format(value);

  return formattedValue;
};

export const digitSplit = (value: string = '') =>
  value.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');

export const getOnlyDigits = (value: string = '') => value.replace(/\D+/g, '');

export const formatCurrencyToSymbol = (currency: string) => {
  return new Intl.NumberFormat('en-NG', {
    style: 'currency',
    currency,
  })
    .format(0)
    .replace(/\d|\./g, '');
};

// Permissions type uses long form i.e. 'android.permission.READ_CALENDAR', but short form 'READ_CALENDAR' is needed for i18next etc.
export const permissionShortForm = (permission: String) =>
  permission.split('.').pop() || '';

export function getInitialsFromString(
  inputString: string,
  length?: number,
): string {
  const words = inputString?.trim().split(' ') || '';
  const initialLength = length ?? words.length;
  let initials = '';

  if (initialLength === 0) {
    return '';
  }

  for (let i = 0; i < initialLength && i < 2; i++) {
    initials += words[i][0].toUpperCase();
  }

  return initials;
}

export const hashPhone = (phone: string) => {
  const firstFour = phone.slice(0, 4);
  const lastThree = phone.slice(-3);
  const middleHashed = '*'.repeat(phone.length - 7);

  return `${firstFour}${middleHashed}${lastThree}`;
};

export const phoneWithPhoneCode = (phone: string) => '+234' + phone.slice(1);
