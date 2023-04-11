import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/createEmployee/Form';
import { DataTables } from '../components/DataTable';

function Home() {
  return (
    <div>
      <header>
        <h1>HRnet</h1>
        <Link to="/">View Current Employees</Link>
      </header>

      <Form />
    
      <DataTables />
    </div>
  );
}

export default Home;