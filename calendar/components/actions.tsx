import { VoidHandler } from "@/shared/types";
import { CaretLeft, CaretRight } from "../../shared/components/icons";
import { MONTH_LABEL } from "@/shared/constant";

type CalendarActionProps = {
  weekStart: Date;
  onPrevious: VoidHandler;
  onNext: VoidHandler;
  onToday: VoidHandler;
};

const CalendarActions = ({
  weekStart,
  onPrevious,
  onNext,
  onToday,
}: CalendarActionProps) => {
  const CurrentMonth = (
    <span className="text-xl text-blue-500">
      {MONTH_LABEL[weekStart.getMonth()]}, {weekStart.getFullYear()}
    </span>
  );

  const Previous = (
    <div
      onClick={onPrevious}
      className="w-12 h-12 flex justify-center items-center cursor-pointer hover:text-blue-500 transition-all"
    >
      <CaretLeft />
    </div>
  );

  const Next = (
    <div
      onClick={onNext}
      className="w-12 h-12 flex justify-center items-center cursor-pointer hover:text-blue-500 transition-all"
    >
      <CaretRight />
    </div>
  );

  const TodayButton = (
    <button
      type="button"
      className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm ml-2"
      onClick={onToday}
    >
      Today
    </button>
  );

  return (
    <div className="flex items-center gap-1">
      {CurrentMonth}
      {Previous}
      {Next}
      {TodayButton}
    </div>
  );
};

export default CalendarActions;
