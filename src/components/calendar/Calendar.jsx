import React, { useState } from "react";
import "./calendar.scss";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";

const Calendar = () => {
  const [showCalendar, setShowCalendar] = useState(false);
  const [selectedRange, setSelectedRange] = useState([
    {
      startDate: new Date(),
      endDate: new Date(),
      key: "selection",
    },
  ]);

  const handleCalendarToggle = () => {
    setShowCalendar(!showCalendar);
  };

  const handleDateSelection = (ranges) => {
    setSelectedRange([ranges.selection]);
  };

  return (
    <div className="calendar-container">
      <button className="calendar-toggle" onClick={handleCalendarToggle}>
        Time Frame
      </button>
      {showCalendar && (
        <div className="calendar-wrapper">
          <DateRangePicker
            ranges={selectedRange}
            onChange={handleDateSelection}
          />
        </div>
      )}
    </div>
  );
};

export default Calendar;
