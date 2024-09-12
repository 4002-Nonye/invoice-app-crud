/* eslint-disable react/prop-types */
import "react-datepicker/dist/react-datepicker.css";
import DatePicker from "react-datepicker";
import calendar from "../assets/calendar.svg";


function Calendar({startDate,setStartDate}) {
 
  return (
    <div className="w-full">
      <h3 className="label ">Calendar</h3>
      <div className="input inline-flex w-full cursor-pointer justify-between rounded-sm border-darkblue-100 bg-darkblue-100 p-3 text-md font-bold text-darkblue-600 ">
        <DatePicker
          dateFormat="dd MMM yyyy"
          dateFormatCalendar="MMM yyyy"
          closeOnScroll={true}
          calendarClassName="dateInput wrapper "
          selected={startDate}
          onChange={(date) => setStartDate(date)}
         
        />
        <img src={calendar} alt="icon" />
      </div>
    </div>
  );
}

export default Calendar;
