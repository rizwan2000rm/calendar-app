import EventComponent from "./event";
import Cell, { LabelCell } from "./cell";
import { Event } from "@/shared/classes";

type DayViewProps = {
  day: Date;
  today: Date;
  events: Event[];
};

const DayView = ({ day, today, events }: DayViewProps) => {
  const GridElements = [...Array(24)].map((_, i) => <Cell key={i} />);

  return (
    <div className="col-span-1 text-center border-r">
      <div className="grid grid-rows-25 relative">
        <LabelCell day={day} today={today} />
        {GridElements}
        {events?.map((event) => (
          <EventComponent key={event.id} event={event} />
        ))}
      </div>
    </div>
  );
};

export default DayView;
