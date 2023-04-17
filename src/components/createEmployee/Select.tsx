import { useState, useEffect } from 'react';
import Select from 'react-select';

interface Option {
    value: number;
    label: string;
}

export const ReactSelect = () => {
    const [selectedOption, setSelectedOption] = useState<Option | null>(null);
    const [options, setOptions] = useState<Option[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('../../datas/selectCountry.json');
            const data = await response.json();
            const options = data.map(({ id, countryName }: { id: number, countryName: string }) => ({ value: id, label: countryName }));
            setOptions(options);
        };
    
        fetchData();
    }, []);

    function handleChange(selectedOption: Option | null) {
        setSelectedOption(selectedOption);
    }

    return (
        <div className='selectCountry'>
            <Select
                value={selectedOption}
                onChange={handleChange}
                options={options}
            />
        </div>
    );
}