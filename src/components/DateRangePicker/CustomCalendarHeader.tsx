import { Typography, IconButton, styled } from "@mui/material";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import { PickersCalendarHeaderProps } from "@mui/x-date-pickers";
import { Dayjs } from "dayjs";

const HeaderRoot = styled("div")({
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  padding: "0 8px",
  "& .MuiTypography-root": {
    fontSize: "20px",
    fontWeight: 400,
    color: "rgba(0, 0, 0, 0.87)",
  },
});

interface CustomCalendarHeaderProps extends PickersCalendarHeaderProps<Dayjs> {
  isLeftCalendar?: boolean;
}

export const CustomCalendarHeader = (props: CustomCalendarHeaderProps) => {
  const { currentMonth, onMonthChange, isLeftCalendar } = props;

  return (
    <HeaderRoot>
      {isLeftCalendar && (
        <IconButton
          onClick={() =>
            onMonthChange(currentMonth.subtract(1, "month"), "left")
          }
        >
          <ChevronLeft />
        </IconButton>
      )}
      <Typography>{currentMonth.format("MMMM YYYY")}</Typography>
      {!isLeftCalendar && (
        <IconButton
          onClick={() => onMonthChange(currentMonth.add(1, "month"), "right")}
        >
          <ChevronRight />
        </IconButton>
      )}
    </HeaderRoot>
  );
};
