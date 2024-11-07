import moment, { Moment } from 'moment';

export const isValidDateRange = (
  start: Moment | null,
  end: Moment | null
): boolean => {
  if (!start || !end) return false;
  return end.isSameOrAfter(start, 'day');
};

export const formatDateRange = (
  start: Moment | null,
  end: Moment | null
): string => {
  if (!start || !end) return '';
  return `${start.format('DD/MM/YYYY')} - ${end.format('DD/MM/YYYY')}`;
};
