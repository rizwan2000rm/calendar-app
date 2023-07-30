import {
  formatTime,
  getEventBorderColor,
  getEventColors,
} from "@/shared/utils";
import { Event } from "@/shared/classes";
import { motion } from "framer-motion";

type EventProps = {
  event: Event;
};

const EventComponent = ({ event }: EventProps) => {
  const startDate = new Date(event.start);
  const startHour = startDate.getHours();
  const startMinute = startDate.getMinutes();

  const endDate = new Date(event.end);
  const endHour = endDate.getHours();
  const endMinute = endDate.getMinutes();

  const heightFromTop = 60 + startHour * 60 + startMinute;
  const heightOfEvent = (endHour - startHour) * 60 + (endMinute - startMinute);

  const Border = (
    <span
      className={`h-full w-1 absolute left-0 top-0 ${getEventBorderColor(
        event.color
      )}`}
    ></span>
  );

  const EventName = <span className="truncate">{event.name}</span>;

  const TimeStamp = (
    <span className="truncate text-xs">
      {formatTime(event.start)}-{formatTime(event.end)}
    </span>
  );

  const Tag = (
    <span className="ml-auto mt-auto text-[8px] uppercase bg-white p-1 rounded-sm">
      <div>{event.tag}</div>
    </span>
  );

  return (
    <motion.span
      className={`event absolute flex flex-col overflow-hidden rounded-lg text-left pl-4 p-2 w-[calc(100%-10px)] ${getEventColors(
        event.color
      )}`}
      key={event.id}
      style={{
        top: `${heightFromTop}px`,
        height: `${heightOfEvent}px`,
      }}
      initial={{ opacity: 0, x: -70 }}
    >
      {Border}
      {EventName}
      {TimeStamp}
      {Tag}
    </motion.span>
  );
};

export default EventComponent;
