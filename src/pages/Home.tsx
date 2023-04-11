import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/createEmployee/Form';
import Select from '../components/Select';

function Home() {
  return (
    <div>
      <header>
        <h1>HRnet</h1>
        <Link to="/">View Current Employees</Link>
      </header>

      <Form />
    
      <Select />
    </div>
  );
}

export default Home;