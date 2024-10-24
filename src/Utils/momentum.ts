import moment, { MomentFormatSpecification } from 'moment';

const DATE_FORMAT = 'YYYY-MM-DD';

const isValid = (date: any, format?: MomentFormatSpecification): boolean =>
  moment(date, format).isValid();

const formatDate = (date: any, format: string): string =>
  isValid(date) ? moment(date).format(format) : '';

const formatDatePickerDate = (date: string) => formatDate(date, DATE_FORMAT);

const getReceiptDate = () => moment().format('YYYY-h-mm-ss-a').toLowerCase();

export { DATE_FORMAT, isValid, formatDate, formatDatePickerDate, getReceiptDate };