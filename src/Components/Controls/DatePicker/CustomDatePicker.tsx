import React, { FC } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import './_CustomDatePicker.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';

interface CustomDatePickerProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}

const CustomDatePicker: FC<CustomDatePickerProps> = ({
  selectedDate,
  setSelectedDate
}) => {
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
  };
  return (
    <div>
      <FontAwesomeIcon icon={faCalendarDays} className='Icon' />
      <DatePicker
        className='Input-style'
        selected={selectedDate}
        onChange={handleDateChange}
        dateFormat='dd-MM-yyyy'
        placeholderText='Select Date'
        calendarClassName='Calender-style'
      />
    </div>
  );
};
export default CustomDatePicker;
