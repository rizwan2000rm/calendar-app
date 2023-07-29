export type EventResponse = {
  count: number;
  next: string | null;
  previous: string | null;
  results: Event[];
};

export type Event = {
  id: string;
  name: string;
  description: string;
  start: string;
  end: string;
  calendarId: string;
  color: string;
  createdAt: string;
  tag: string;
};

export type EventMap = {
  [date: string]: Event[];
};
