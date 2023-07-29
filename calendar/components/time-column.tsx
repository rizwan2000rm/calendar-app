const TimeColumn = () => {
  return (
    <div className="col-span-1 text-center border-r">
      <div className="grid grid-rows-25">
        <div className="row-span-1 flex justify-center items-center h-[60px] border-b"></div>

        {[...Array(24)].map((_, i) => {
          const hour = i < 10 ? `0${i}` : i;

          return (
            <div
              key={i}
              className="row-span-1 flex justify-center h-[60px] border-b"
            >
              {hour}:00
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimeColumn;
