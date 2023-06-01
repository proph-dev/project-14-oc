import { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

interface ReactDatePickerProps {
    onChange?: (date: Date) => void;
    selected: Date | null;
    maxDateLimit: number;
}

export const ReactDatePicker = (props: ReactDatePickerProps) => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);
    
    const minDate = new Date();
    minDate.setFullYear(minDate.getFullYear() - 120);

    const maxDate = new Date();
    maxDate.setFullYear(maxDate.getFullYear() - props.maxDateLimit);

    const handleDateChange = (date: Date) => {
        setSelectedDate(date);
        props.onChange?.(date);
    };

    return (
        <div className='dateTime'>
            <DatePicker
                selected={ selectedDate }
                onChange={handleDateChange}
                dateFormat="dd/MM/yyyy"
                minDate={minDate}
                maxDate={maxDate}
            />
        </div>
    );
}