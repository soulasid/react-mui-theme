export const calendarConfig = {
  styles: {
    startDay: (inRange: boolean) => ({
      isStart: true,
      isEnd: false,
      inRange,
    }),
    endDay: (inRange: boolean) => ({
      isStart: false,
      isEnd: true,
      inRange,
    }),
    rangeDay: {
      isStart: false,
      isEnd: false,
      inRange: true,
    },
    calendar: {
      isStart: false,
      isEnd: false,
      inRange: false,
    },
  },
  slots: {},
  popoverOrigin: {
    vertical: "bottom",
    horizontal: "left",
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "left",
  },
};
