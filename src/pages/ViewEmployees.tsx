import { Link } from "react-router-dom";
import List from "../components/viewEmployees/List";
import '../components/viewEmployees/list-employees.css';

function ViewEmployees() {
  return (
    <div>
      <header>
        <h1>Current Employees</h1>
      </header>

        <main id="listEmployees">
            <List />

            <Link to="/">Home</Link>
        </main>
    </div>
  );
}

export default ViewEmployees;