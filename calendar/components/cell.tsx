import { DAY_LABEL } from "@/shared/constant";

const Cell = (props: any) => {
  return (
    <div
      className="row-span-1 flex flex-col justify-center items-center h-[60px] border-b"
      {...props}
    >
      {props.children}
    </div>
  );
};

type LabelCellProps = {
  day: Date;
  today: Date;
};

export const LabelCell = ({ day, today }: LabelCellProps) => (
  <Cell>
    <div
      className={`${
        today.toDateString() === day.toDateString()
          ? "bg-blue-500 rounded-full text-white flex justify-center items-center"
          : ""
      } w-8 h-8`}
    >
      {day.getDate()}
    </div>

    {DAY_LABEL[day.getDay()]}
  </Cell>
);

export default Cell;
