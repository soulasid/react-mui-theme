import { Dayjs } from "dayjs";
import { SxProps, Theme } from "@mui/material";

export interface CalendarProps {
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
  //   defaultValue: Dayjs;
  isLeftCalendar?: boolean;
  startDate: Dayjs | null;
  endDate: Dayjs | null;
  onPrevMonth: (e?: unknown) => void;
  onNextMonth: (e?: unknown) => void;
  referenceDate: Dayjs;
}

export interface DateRange {
  startDate: Dayjs | null;
  endDate: Dayjs | null;
}

export interface DayStyleProps {
  dayStyle: {
    backgroundColor?: string;
    color?: string;
    borderTopLeftRadius?: string;
    borderTopRightRadius?: string;
    borderBottomLeftRadius?: string;
    borderBottomRightRadius?: string;
    borderRadius?: string;
    "&:hover"?: {
      backgroundColor: string;
    };
  };
  isStart: boolean;
  isEnd: boolean;
  inRange: boolean;
}

// Alternative approach using MUI's SxProps
export interface DayStylePropsAlt {
  dayStyle: SxProps<Theme>;
}
