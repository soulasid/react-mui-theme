import { Box, styled } from "@mui/material";
import { PickersDay } from "@mui/x-date-pickers";
import type { DayStyleProps } from "./types";

export const CalendarContainer = styled(Box)({
  display: "flex",
  gap: "32px",
  padding: "24px",
  backgroundColor: "#fff",
  boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
  borderRadius: "8px",
  "& .MuiDateCalendar-root": {
    width: "320px",
    backgroundColor: "#fff",
  },
  "& .MuiPickersCalendarHeader-root": {
    display: "flex",
    justifyContent: "center",
    padding: "0 8px 16px 8px",
    "& .MuiPickersCalendarHeader-label": {
      fontSize: "20px",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.87)",
    },
  },
  "& .MuiDayCalendar-weekDayLabel": {
    width: "40px",
    height: "40px",
    color: "rgba(0, 0, 0, 0.6)",
    fontSize: "14px",
    fontWeight: 400,
  },
  "&::after": {
    content: '""',
    position: "absolute",
    left: "50%",
    top: "10%",
    height: "80%",
    width: "1px",
    backgroundColor: "rgba(0, 0, 0, 0.12)",
  },
});

export const DateRangeInput = styled(Box)({
  border: "1px solid #e0e0e0",
  borderRadius: "4px",
  padding: "8px 16px",
  fontSize: "16px",
  color: "#333",
  backgroundColor: "#fff",
  cursor: "pointer",
  transition: "all 0.2s ease",
  "&:hover": {
    borderColor: "#1976d2",
    backgroundColor: "#f8f9fa",
  },
});

export const StyledPickersDay = styled(PickersDay)<{
  isSelected?: boolean;
  isHighlighted?: boolean;
}>(({ isSelected, isHighlighted, theme }) => ({
  // Default state
  borderRadius: "50%",

  // Selected date styling (blue circle like April 4 and 29 in image)
  ...(isSelected && {
    backgroundColor: "#1976d2 !important",
    color: "#fff !important",
    "&:hover": {
      backgroundColor: "#1565c0 !important",
    },
  }),

  // Highlighted range styling (light blue background)
  ...(isHighlighted && {
    backgroundColor: "#e3f2fd",
    borderRadius: 0,
    "&:hover": {
      backgroundColor: "#bbdefb",
    },
  }),
}));
