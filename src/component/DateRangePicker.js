import { DateRange } from "react-date-range";
import React from "react";

function MyDateRangePicker() {
  const selectionRange = {
    startDate: new Date(),
    endDate: new Date(),
    key: "selection",
  };
  const handleSelect = (ranges) => {
    console.log(ranges);
  };

  return (
    <DateRange
      moveRangeOnFirstSelection={false}
      ranges={[selectionRange]}
      onChange={handleSelect}
    />
  );
}
export default MyDateRangePicker;
