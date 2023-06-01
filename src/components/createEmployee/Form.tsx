import { useState, useEffect } from 'react';
import { ReactSelect } from './Select';
import { ReactDatePicker } from './Date';
import { useDispatch } from 'react-redux';
import { setEmployeeData } from '../../redux/reducer';
import { Modal } from '../Modal';
import './form.css';

interface State {
    value: number;
    label: string;
}

interface Department {
    value: number;
    label: string;
}

const departments: Department[] = [
    { value: 1, label: 'Sales' },
    { value: 2, label: 'Marketing' },
    { value: 3, label: 'Engineering' },
    { value: 4, label: 'Humain Resources' },
    { value: 5, label: 'Legal' }
]

const initialValues = {
    firstName: '',
    lastName: '',
    birthDate: null as Date | null,
    startDate: null as Date | null,
    street: '',
    city: '',
    state: null as State | null,
    zipCode: '',
    department: null as Department | null,
};

export const Form = () => {
    const [states, setStates] = useState<State[]>([]);
    const [formValues, setFormValues] = useState(initialValues);
    const [showModal, setShowModal] = useState(false);
    const dispatch = useDispatch();
    

    useEffect(() => {
        const fetchData = async () => {
            const response = await fetch('./datas/selectCountry.json');
            const data = await response.json();
            const states = data.map(({ id, countryName }: { id: number, countryName: string }) => ({ value: id, label: countryName }));
            setStates(states);
        };
     
        fetchData();
    }, []);

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(setEmployeeData({ ...formValues, department: formValues.department?.label, state: formValues.state?.label}));
      
        setFormValues(initialValues);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Create Employee</h2>

                <label htmlFor="">First Name</label>
                <input type="text" value={formValues.firstName} onChange={(e) => setFormValues({ ...formValues, firstName: e.target.value })} required />

                <label htmlFor="">Last Name</label>
                <input type="text" value={formValues.lastName} onChange={(e) => setFormValues({ ...formValues, lastName: e.target.value })} required />


                <label htmlFor="">Date of Birth</label>
                <ReactDatePicker
                    selected={formValues.birthDate}
                    onChange={(date: Date | null) =>
                        setFormValues({ ...formValues, birthDate: date })
                    }
                    maxDateLimit={18}
                />

                <label htmlFor="">Start Date</label>
                <ReactDatePicker
                    selected={formValues.startDate}
                    onChange={(date: Date | null) =>
                        setFormValues({ ...formValues, startDate: date })
                    }
                    maxDateLimit={0}
                />

                <fieldset>
                    <legend>Address</legend>
                    <label htmlFor="">Street</label>
                    <input type="text" value={formValues.street} onChange={(e) => setFormValues({ ...formValues, street: e.target.value })} required />

                    <label htmlFor="">City</label>
                    <input type="text" value={formValues.city} onChange={(e) => setFormValues({ ...formValues, city: e.target.value })} required />

                    <label htmlFor="">State</label>
                    <ReactSelect options={states} value={formValues.state} onChange={(selectedOption) => setFormValues({ ...formValues, state: selectedOption })} />

                    <label htmlFor="">Zip Code</label>
                    <input type="number" value={formValues.zipCode} onChange={(e) => setFormValues({ ...formValues, zipCode: e.target.value })} required />
                </fieldset>

                <label htmlFor="">Department</label>
                <ReactSelect options={departments} value={formValues.department} onChange={(selectedOption) => setFormValues({ ...formValues, department: selectedOption })} />

                <button type="submit">Save</button>
            </form>
            

            <Modal
                onClose={ handleCloseModal }
                showModal={ showModal }
                modalClass="modalContent"
                showClose
                closeText='Fermer'
                closeClass="close"
                escapeClose
            >
                <p>Employee create !</p>
            </Modal>
        </>
    )
}

export default Form;
