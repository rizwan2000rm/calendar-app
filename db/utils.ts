import { db } from ".";
import { EVENTS_RESPONSE } from "@/shared/mock";

export const addEventsToDB = async () => {
  for (const event of EVENTS_RESPONSE.results) {
    try {
      // Check if the event already exists in the database
      const existingEvent = await db.events.get(event.id);

      if (!existingEvent) {
        // Add the event to the database
        await db.events.add({
          id: event.id,
          name: event.name,
          description: event.description,
          start: event.start,
          end: event.end,
          calendarId: event.calendarId,
          color: event.color,
          createdAt: event.createdAt,
          tag: event.tag,
        });
      }
    } catch (error) {
      console.error("Error adding event to the database:", error);
    }
  }

  console.log("All events added to the database!");
};
