import DayView from "./day-view";
import { EventMap } from "@/shared/classes";

type WeekViewProps = {
  week: Date[];
  today: Date;
  events: EventMap;
};

const WeekView = ({ week, today, events }: WeekViewProps) =>
  week.map((day) => {
    const currentEvents = events[day.toLocaleDateString()];

    return (
      <DayView
        key={day.toDateString()}
        day={day}
        today={today}
        events={currentEvents}
      />
    );
  });

export default WeekView;
