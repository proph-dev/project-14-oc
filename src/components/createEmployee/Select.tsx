import Select from 'react-select';

interface Option {
    value: number;
    label: string;
}
interface ReactSelectProps {
    options: Option[];
    onChange?: (selectedOption: Option | null) => void;
    value?: Option | null;
}

export const ReactSelect = (props: ReactSelectProps) => {
    const { options } = props;

    const handleOptionChange = (selectedOption: Option | null) => {
        props.onChange?.(selectedOption);
    };

    return (
        <div className='selectCountry'>
            <Select
                value={props.value}
                onChange={handleOptionChange}
                options={options}
            />
        </div>
    );
}