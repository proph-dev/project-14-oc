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
        </form>
    )
}

export default Form;