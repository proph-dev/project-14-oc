import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import DataTable from 'react-data-table-component';
import './list-employees.css';

interface IData {
    id: number;
    firstName: string;
    lastName: string;
    birthDate: string;
    city: string;
    department: string;
    startDate: string;
    state: string;
    street: string;
    zipCode: string;
}

export const List: React.FC = () => {
    const [filterText, setFilterText] = useState('');
    const employees = useSelector((state: any) => state.employee.employees);

    const columns = [
        {
            name: 'First name',
            selector: (row: IData) => row.firstName,
            sortable: true
        },
        {
            name: 'Last name',
            selector: (row: IData) => row.lastName,
            sortable: true
        },
        {
            name: 'Birth Date',
            selector: (row: IData) => new Date(row.birthDate).toLocaleDateString(),
            sortable: true
        },
        {
            name: 'City',
            selector: (row: IData) => row.city,
            sortable: true
        },
        {
            name: 'Department',
            selector: (row: IData) => row.department,
            sortable: true
        },
        {
            name: 'Start Date',
            selector: (row: IData) => new Date(row.startDate).toLocaleDateString(),
            sortable: true
        },
        {
            name: 'State',
            selector: (row: IData) => row.state,
            sortable: true
        },
        {
            name: 'Street',
            selector: (row: IData) => row.street,
            sortable: true
        },
        {
            name: 'Zip Code',
            selector: (row: IData) => row.zipCode,
            sortable: true
        },
    ];
    
    console.log(employees)

    const filteredData = employees.filter((item: IData) => 
        item.firstName.toLowerCase().includes(filterText.toLowerCase()) ||
        item.lastName.toLowerCase().includes(filterText.toLowerCase())
    );
    
    return (
        <section>
            <input
                id="search"
                type="text"
                placeholder="Find an employee..."
                value={filterText}
                onChange={e => setFilterText(e.target.value)}
                className='searchbar'
            />

            <DataTable
                columns={columns}
                data={filteredData}
                pagination
            />
        </section>
    )
}

export default List;
