import { FC } from 'react';

import { DatePicker } from '@mui/x-date-pickers';
import { makeStyles } from '@mui/styles';

import { TextFieldProps } from '@mui/material';
import { SxProps } from '@mui/system';

import './_MuiDatePicker.scss';

interface MuiDatePickerProps {
  selectedDate: Date | null;
  setSelectedDate: (date: Date | null) => void;
}

const MuiDatePicker: FC<MuiDatePickerProps> = ({
  selectedDate,
  setSelectedDate
}) => {
  return (
    <div>
      <DatePicker
        className='datepicker'
        showDaysOutsideCurrentMonth
        // InputProps={{ sx: { '& .MuiSvgIcon-root': { color: 'blue' } } }}
        label='Select Date'
        // views={['day', 'month', 'year']}
        value={selectedDate}
        onChange={(newValue) => setSelectedDate(newValue)}
      />
    </div>
  );
};

export default MuiDatePicker;
