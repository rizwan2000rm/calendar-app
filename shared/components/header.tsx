import CalendarActions from "@/calendar/components/actions";
import { EventHandler } from "../types";
import {
  getNextWeekStartDate,
  getPreviousMonday,
  getPreviousWeekStartDate,
} from "../utils";

/* eslint-disable @next/next/no-img-element */
type HeaderProps = {
  weekStart: Date;
  setWeekStart: EventHandler<Date>;
};

const Header = ({ weekStart, setWeekStart }: HeaderProps) => {
  const currentDate = new Date();

  const onPrevious = () => {
    const previousWeekStart = getPreviousWeekStartDate(weekStart);
    setWeekStart(previousWeekStart);
  };

  const onNext = () => {
    const nextWeekStart = getNextWeekStartDate(weekStart);
    setWeekStart(nextWeekStart);
  };

  const onToday = () => {
    const today = Date.now();
    const previousMonday = getPreviousMonday(today);
    setWeekStart(previousMonday);
  };

  const CurrentDate = (
    <div className="flex items-center justify-between">
      <span className="flex-none text-xl font-semibold">
        Today, {currentDate.toDateString()}
      </span>
      <div className="sm:hidden">
        <button
          type="button"
          className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm"
          data-hs-collapse="#navbar-collapse-with-animation"
          aria-controls="navbar-collapse-with-animation"
          aria-label="Toggle navigation"
        >
          <svg
            className="hs-collapse-open:hidden w-4 h-4"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
            />
          </svg>
          <svg
            className="hs-collapse-open:block hidden w-4 h-4"
            width="16"
            height="16"
            fill="currentColor"
            viewBox="0 0 16 16"
          >
            <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
          </svg>
        </button>
      </div>
    </div>
  );

  const Avatars = (
    <div className="flex -space-x-2">
      <img
        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt="Image Description"
      />
      <img
        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1531927557220-a9e23c1e4794?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
        alt="Image Description"
      />
      <img
        className="inline-block h-8 w-8 rounded-full ring-2 ring-white"
        src="https://images.unsplash.com/photo-1541101767792-f9b2b1c4f127?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&&auto=format&fit=facearea&facepad=3&w=300&h=300&q=80"
        alt="Image Description"
      />
    </div>
  );

  const Actions = (
    <div
      id="navbar-collapse-with-animation"
      className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
    >
      <div className="flex flex-col gap-5 mt-5 p-4 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:pl-5">
        <CalendarActions
          weekStart={weekStart}
          onPrevious={onPrevious}
          onNext={onNext}
          onToday={onToday}
        />
        {Avatars}
      </div>
    </div>
  );

  return (
    <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white text-sm border-b border-gray-100">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between"
        aria-label="Global"
      >
        {CurrentDate}
        {Actions}
      </nav>
    </header>
  );
};

export default Header;
