import dayjs, { Dayjs } from 'dayjs';

const separator = '-';
const dateTemplate = `DD${separator}MM${separator}YYYY`;
const dateTimeTemplate = `DD${separator}MM${separator}YYYY HH:mm:ss`;
type TDateValue = string | Date | Dayjs | undefined | null;

export const format = {
  date: dateTemplate,
  dateTime: dateTimeTemplate,
  time: 'HH:mm:ss',
} as const;
type FormatDateValue = (typeof format)[keyof typeof format];
export const newDate = (date: string | Date | Dayjs) => {
  return dayjs(date);
};
type ToDayResult<T> = Exclude<T, string> extends string ? string : Dayjs;
export const toDay = <T extends string | undefined>(
  format?: T | FormatDateValue
) => {
  if (format) dayjs().format(format) as ToDayResult<T>;
  return dayjs() as ToDayResult<T>;
};
export const formatDate = (
  date?: TDateValue,
  config?: {
    format?: FormatDateValue | UniqueString;
    defaultValue?: string;
    ISOString?: boolean;
  }
) => {
  const {
    defaultValue = '',
    format = 'DD-MM-YYYY',
    ISOString = false,
  } = config || {};
  if (!date) {
    return defaultValue;
  }
  if (typeof date === 'string' && date.includes('0001-01-01')) {
    return defaultValue;
  }
  const value = newDate(date);
  if (!value.isValid()) {
    return defaultValue;
  }
  if (ISOString) {
    return value.toISOString();
  }
  return value.format(format);
};
