import TimeColumn from "./components/time-column";
import WeekView from "./components/week-view";
import { getNextSevenDays, groupEventsByDate } from "@/shared/utils";
import { EVENTS_RESPONSE } from "@/shared/mock";

type CalendarProps = {
  weekStart: Date;
};

const Calendar = ({ weekStart }: CalendarProps) => {
  const week = getNextSevenDays(weekStart);
  const today = new Date();

  const events = groupEventsByDate(EVENTS_RESPONSE);

  return (
    <div className="py-4 pb-24 overflow-auto h-full">
      <div className="grid grid-cols-8">
        <TimeColumn />
        <WeekView week={week} today={today} events={events} />
      </div>
    </div>
  );
};

export default Calendar;
