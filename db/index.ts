import Dexie, { Table } from "dexie";
import { Event } from "@/shared/classes";

class EventsDB extends Dexie {
  events!: Table<Event>;

  constructor() {
    super("eventsDB");
    this.version(2).stores({
      events: `
        id,
        name,
        description,
        start,
        end,
        calendarId,
        color,
        createdAt,
        tag`,
    });
  }
}

export const db = new EventsDB();
