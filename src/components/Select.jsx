import React, { useState } from 'react';
import Select from 'react-select';

export const ReactSelect = () => {
    const [selectedOption, setSelectedOption] = useState(null);

    const options = [
        { value: 'option1', label: 'Option 1' },
        { value: 'option2', label: 'Option 2' },
        { value: 'option3', label: 'Option 3' },
    ];

    function handleChange(selectedOption) {
        setSelectedOption(selectedOption);
    }

    return (
        <div>
        <Select
            value={selectedOption}
            onChange={handleChange}
            options={options}
        />
        </div>
    );
}