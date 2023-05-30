import { Link } from 'react-router-dom';
import Form from '../components/createEmployee/Form';

function Home() {
  return (
    <div>
      <header>
        <h1>HRnet</h1>
        <Link to="/employee-list">View Current Employees</Link>
      </header>

      <main>
        <Form />
      </main>
    </div>
  );
}

export default Home;