import { ReactSelect } from './Select';
import { ReactDatePicker } from './Date';
import './form.css';

export const Form = () => {
    return (
        <form action="">
            <h2>Create Employee</h2>

            <label htmlFor="">First Name</label>
            <input type="text" />

            <label htmlFor="">Last Name</label>
            <input type="text" />

            <label htmlFor="">Date of Birth</label>
            <ReactDatePicker />

            <label htmlFor="">Start Date</label>
            <ReactDatePicker />

            <fieldset>
                <legend>Address</legend>
                <label htmlFor="">Street</label>
                <input type="text" />

                <label htmlFor="">City</label>
                <input type="text" />

                <label htmlFor="">State</label>
                <ReactSelect />

                <label htmlFor="">Zip Code</label>
                <input type="number" />
            </fieldset>

            <label htmlFor="">Department</label>
            <select name="" id="">
                <option value="">Sales</option>
            </select>

            <input type="submit" value="Save" />
        </form>
    )
}

export default Form;