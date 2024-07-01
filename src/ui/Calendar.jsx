import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import calendar from "../assets/calendar.svg";
import { useState } from "react";

function Calendar() {
  const [startDate, setStartDate] = useState(new Date());
  return (
    <div className="w-full">
      <h3 className="label">Calendar</h3>
      <div className="inline-flex w-full  justify-between rounded-sm cursor-pointer border-darkblue-100 bg-darkblue-100 p-3 text-lg font-bold text-darkblue-600 input">
      <DatePicker

     dateFormat="dd MMM yyyy"
     dateFormatCalendar="MMM yyyy"
        closeOnScroll={true}
        calendarClassName='dateInput wrapper '
        selected={startDate}
        onChange={(date) => setStartDate(date)}
      />
        <img src={calendar} alt="icon" />
      </div>
      
    </div>
  );
}

export default Calendar;
