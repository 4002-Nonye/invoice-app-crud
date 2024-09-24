import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

import calendar from '../assets/calendar.svg';
import { useForm } from '../context/FormContext';

function Calendar() {
    const { startDate, handleCalendar } = useForm();

    return (
        <div className="w-full">
            <h3 className="label">Calendar</h3>
            <div className="input text-md inline-flex w-full cursor-pointer justify-between rounded-sm border-darkblue-100 bg-darkblue-100 p-3 font-bold text-darkblue-600">
                <DatePicker
                    dateFormat="dd MMM yyyy"
                    dateFormatCalendar="MMM yyyy"
                    closeOnScroll={true}
                    calendarClassName="dateInput wrapper "
                    selected={startDate}
                    onChange={(date) => handleCalendar(date)}
                />
                <img src={calendar} alt="icon" />
            </div>
        </div>
    );
}

export default Calendar;
