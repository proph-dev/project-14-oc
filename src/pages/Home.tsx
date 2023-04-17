import React from 'react';
import { Link } from 'react-router-dom';
import Form from '../components/createEmployee/Form';

function Home() {
  return (
    <div>
      <header>
        <h1>HRnet</h1>
        <Link to="/">View Current Employees</Link>
      </header>

      <Form />
    </div>
  );
}

export default Home;