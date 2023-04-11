import React, { useState } from 'react';
import DateTimePicker from 'react-datetime-picker';

export const Date = () => {
    const [date, setDate] = useState(new Date());

    function onChange(date) {
        setDate(date);
    }

    return (
        <div>
        <DateTimePicker onChange={onChange} value={date} />
        </div>
    );
}

export default Date;