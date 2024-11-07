import type { Dayjs } from 'dayjs';
declare global {
  type EnvMode = 'development' | 'staging' | 'production';
  type UniqueString = string & Record<never, never>;
  type FieldValues = Record<string, unknown>;
  type DateString = string;
  type DateValue = Dayjs;
  interface DateRange {
    begin: DateValue;
    end: DateValue;
  }
  type IndexSignature<T extends FieldValues = FieldValues> = {
    [K in keyof T]: T[K];
  };
  type FieldValuesObject<T extends FieldValues = FieldValues> = {
    [K in keyof T]: T[K];
  };
  interface SearchParamsDefault {
    page?: string;
    pageSize: string;
  }
  type SearchParams<T> = FieldValuesObject<T> & SearchParamsDefault;
  type DataQuery<T> = FieldValuesObject<T> & {
    id: number;
  };
}
