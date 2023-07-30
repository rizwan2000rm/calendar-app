import { useEffect, useState } from "react";
import { stagger, useAnimate } from "framer-motion";
import { useLiveQuery } from "dexie-react-hooks";
import { db } from "@/db";
import TimeColumn from "./components/time-column";
import WeekView from "./components/week-view";
import { getNextSevenDays, groupEventsByDate } from "@/shared/utils";
import { EventResponse } from "@/shared/classes";

type CalendarProps = {
  weekStart: Date;
};

const Calendar = ({ weekStart }: CalendarProps) => {
  const today = new Date();
  const week = getNextSevenDays(weekStart);

  const [eventResponse, setEventResponse] = useState<EventResponse>();

  useLiveQuery(async () => {
    const events = await db.events.toArray();

    setEventResponse({
      count: events.length,
      next: null,
      previous: null,
      results: events,
    });
  });

  const events = groupEventsByDate(eventResponse);

  const [scope, animate] = useAnimate();
  const staggerEvents = stagger(0.15, { startDelay: 0.1 });

  useEffect(() => {
    if (document.getElementsByClassName("event").length === 0) return;

    animate(
      ".event",
      { opacity: 1, x: 0 },
      { duration: 0.4, delay: staggerEvents }
    );
  }, [animate, events, staggerEvents]);

  return (
    <div className="py-4 pb-24 overflow-auto h-full">
      <div className="grid grid-cols-8" ref={scope}>
        <TimeColumn />
        <WeekView week={week} today={today} events={events} />
      </div>
    </div>
  );
};

export default Calendar;
