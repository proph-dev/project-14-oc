import React from "react";
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
            <input type="date" />

            <label htmlFor="">Start Date</label>
            <input type="date" />

            <fieldset>
                <legend>Address</legend>
                <label htmlFor="">Street</label>
                <input type="text" />

                <label htmlFor="">City</label>
                <input type="text" />

                <label htmlFor="">State</label>
                <select name="state" id="state">
                    <option value="AL">
                        Alabama
                    </option>
                </select>

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