import { Box, Popover } from "@mui/material";
import { DateCalendar } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import isBetween from "dayjs/plugin/isBetween";

import { useState, useCallback, memo } from "react";
import { CalendarContainer, DateRangeInput, StyledPickersDay } from "./styles";
import { calendarConfig } from "./config";
import type { CalendarProps, DateRange } from "./types";
import { CustomCalendarHeader } from "./CustomCalendarHeader";
// Initialize dayjs plugins
dayjs.extend(isBetween);

const Calendar = memo(
  ({
    value,
    onChange,
    isLeftCalendar = true,
    startDate,
    endDate,
    onPrevMonth,
    onNextMonth,
    referenceDate,
  }: CalendarProps) => {
    const getDayStyle = useCallback(
      (date: Dayjs) => {
        const isStart = startDate?.isSame(date, "day") ?? false;
        const isEnd = endDate?.isSame(date, "day") ?? false;
        const inRange = date.isBetween(startDate, endDate, "day", "[]");

        return {
          dayStyle: isStart
            ? calendarConfig.styles.startDay(inRange)
            : isEnd
              ? calendarConfig.styles.endDay(inRange)
              : inRange
                ? calendarConfig.styles.rangeDay
                : calendarConfig.styles.calendar,
          isStart,
          isEnd,
          inRange,
        };
      },
      [startDate, endDate]
    );

    return (
      <DateCalendar
        // value={value}
        onChange={onChange}
        // minDate={calendarConfig.minDate}
        // maxDate={calendarConfig.maxDate}
        referenceDate={referenceDate}
        views={["day", "month", "year"]}
        slots={{
          ...calendarConfig.slots,
          day: (props) => (
            <StyledPickersDay {...props} dayStyle={getDayStyle(props.day)} />
          ),
          // calendarHeader: (props) => (
          //   <CustomCalendarHeader {...props} isLeftCalendar={isLeftCalendar} />
          // ),
        }}
        slotProps={{
          leftArrowIcon: {
            onClick: onPrevMonth,
            // style: {
            //   visibility: isLeftCalendar ? "visible" : "hidden",
            //   cursor: isLeftCalendar ? "pointer" : "default",
            // },
          },
          rightArrowIcon: {
            onClick: onNextMonth,
            // style: {
            //   visibility: !isLeftCalendar ? "visible" : "hidden",
            //   cursor: !isLeftCalendar ? "pointer" : "default",
            // },
          },
          calendarHeader: (ownerState) => {
            return {
              ...ownerState,
              currentMonth: referenceDate,
              onMonthChange: (date, direction) => {
                if (direction === "left") {
                  date.subtract(1, "month");
                  onPrevMonth();
                } else {
                  date.add(1, "month");
                  onNextMonth();
                }
              },
            };
          },
        }}
        // sx={calendarConfig.styles.calendar}
      />
    );
  }
);

const DateRangePicker = () => {
  const [dateRange, setDateRange] = useState<DateRange>({
    startDate: null,
    endDate: null,
  });
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [isFirstSelect, setIsFirstSelect] = useState(true);

  const [calendarValues, setCalendarValues] = useState({
    left: { startDate: null, endDate: null } as DateRange,
    right: { startDate: null, endDate: null } as DateRange,
  });
  const [referenceDate, setReferenceDate] = useState(dayjs().add(-1, "month"));
  const handleClick = useCallback((event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setIsFirstSelect(true);
    setDateRange({ startDate: null, endDate: null });
  }, []);

  const handleClose = useCallback(() => {
    setAnchorEl(null);
  }, []);

  const handleDateSelect = useCallback(
    (date: Dayjs | null, isLeft: boolean) => {
      if (!date) return;
      if (isFirstSelect) {
        setIsFirstSelect(false);
        setDateRange({ startDate: date, endDate: null });
        setCalendarValues({
          right: {
            startDate: isLeft ? null : date,
            endDate: null,
          },
          left: {
            startDate: isLeft ? date : null,
            endDate: null,
          },
        });
        return;
      }
      setDateRange((prev) => {
        const newRange = date.isBefore(prev.startDate)
          ? { startDate: date, endDate: prev.startDate }
          : { startDate: prev.startDate, endDate: date };
        return newRange;
      });
      setCalendarValues((prev) => {
        const getCalendarValue = prev[isLeft ? "left" : "right"];
        return {
          ...prev,
          [isLeft ? "left" : "right"]: {
            startDate: getCalendarValue.startDate,
            endDate: date,
          },
        };
      });

      setIsFirstSelect(true);
    },
    [isFirstSelect]
  );

  const handleMonthChange = useCallback((direction: "prev" | "next") => {
    setReferenceDate((prev) =>
      direction === "prev" ? prev.subtract(1, "month") : prev.add(1, "month")
    );
  }, []);

  const displayDateRange = useCallback(() => {
    const { startDate, endDate } = dateRange;
    if (startDate && endDate) {
      return `${startDate.format("MM/DD/YYYY")} - ${endDate.format("MM/DD/YYYY")}`;
    }
    return "MM/DD/YYYY - MM/DD/YYYY";
  }, [dateRange]);

  return (
    <Box>
      <DateRangeInput onClick={handleClick}>
        {displayDateRange()}
      </DateRangeInput>

      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
        onClose={handleClose}
        // anchorOrigin={calendarConfig.popoverOrigin}
        // transformOrigin={calendarConfig.transformOrigin}
      >
        <CalendarContainer>
          <Calendar
            value={calendarValues.left.startDate}
            onChange={(date) => handleDateSelect(date, true)}
            isLeftCalendar={true}
            startDate={calendarValues.left.startDate}
            endDate={calendarValues.left.endDate}
            onPrevMonth={() => handleMonthChange("prev")}
            onNextMonth={() => handleMonthChange("next")}
            referenceDate={referenceDate.subtract(1, "month")}
          />
          <Calendar
            value={calendarValues.right.startDate}
            onChange={(date) => handleDateSelect(date, false)}
            isLeftCalendar={false}
            startDate={calendarValues.right.startDate}
            endDate={calendarValues.right.endDate}
            onPrevMonth={() => handleMonthChange("prev")}
            onNextMonth={() => handleMonthChange("next")}
            referenceDate={referenceDate}
          />
        </CalendarContainer>
      </Popover>
    </Box>
  );
};

export default DateRangePicker;
