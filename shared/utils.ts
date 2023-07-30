import { Event, EventMap, EventResponse } from "./classes";

export const getPreviousMonday = (currentDay: number): Date => {
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
  const currentDayObject = new Date(currentDay);

  // Calculate the day of the week (0: Sunday, 1: Monday, ..., 6: Saturday)
  const currentDayOfWeek = currentDayObject.getDay();

  // Calculate the number of days from the current day to the previous Monday
  const daysUntilPreviousMonday = (currentDayOfWeek + 6) % 7;

  // Calculate the timestamp of the previous Monday
  const previousMondayTimestamp =
    currentDay - daysUntilPreviousMonday * oneDayInMilliseconds;

  return new Date(previousMondayTimestamp);
};

export const getNextSevenDays = (weekStart: Date): Date[] => {
  const oneDayInMilliseconds = 24 * 60 * 60 * 1000;
  const nextSevenDays: Date[] = [];

  for (let i = 0; i < 7; i++) {
    const nextDayTimestamp = weekStart.getTime() + i * oneDayInMilliseconds;
    const nextDay = new Date(nextDayTimestamp);
    nextSevenDays.push(nextDay);
  }

  return nextSevenDays;
};

export const getPreviousWeekStartDate = (weekStartDate: Date): Date => {
  const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
  const previousWeekStartDate = new Date(
    weekStartDate.getTime() - oneWeekInMilliseconds
  );
  return previousWeekStartDate;
};

export const getNextWeekStartDate = (weekStartDate: Date): Date => {
  const oneWeekInMilliseconds = 7 * 24 * 60 * 60 * 1000;
  const nextWeekStartDate = new Date(
    weekStartDate.getTime() + oneWeekInMilliseconds
  );
  return nextWeekStartDate;
};

export const groupEventsByDate = (eventsResponse?: EventResponse): EventMap => {
  if (!eventsResponse) return {};

  const events: Event[] = eventsResponse.results;
  const eventMap: { [date: string]: Event[] } = {};

  // Group events by their start date
  for (const event of events) {
    const startDateObj = new Date(event.start); // Extract only the date part
    const startDate = startDateObj.toLocaleDateString();

    if (!eventMap[startDate]) {
      eventMap[startDate] = [];
    }
    eventMap[startDate].push(event);
  }

  return eventMap;
};

export const getEventColors = (color: string) => {
  switch (color) {
    case "blue":
      return "bg-[var(--clr-blue-light)] text-[var(--clr-blue-dark)]";
    case "orange":
      return "bg-[var(--clr-orange-light)] text-[var(--clr-orange-dark)]";
    case "gray":
      return "bg-[var(--clr-gray-light)] text-[var(--clr-gray-dark)]";
    default:
      return "bg-[var(--clr-blue-light)] text-[var(--clr-blue-dark)]";
  }
};

export const getEventBorderColor = (color: string) => {
  switch (color) {
    case "blue":
      return "bg-[var(--clr-blue-dark)]";
    case "orange":
      return "bg-[var(--clr-orange-dark)]";
    case "gray":
      return "bg-[var(--clr-gray-dark)]";
    default:
      return "bg-[var(--clr-blue-dark)]";
  }
};

export const formatDate = (dateString: string) => {
  const date = new Date(dateString);

  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${day}/${month}/${year}`;
};

export const formatTime = (dateString: string) => {
  const date = new Date(dateString);

  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");

  return `${hours}:${minutes}`;
};
