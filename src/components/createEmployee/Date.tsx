import { useState } from 'react';
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';

export const ReactDatePicker = () => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(null);

    return (
        <div className='dateTime'>
            <DatePicker
                selected={ selectedDate }
                onChange={ date => setSelectedDate(date) }
                dateFormat="dd/MM/yyyy"
            />
        </div>
    );
}