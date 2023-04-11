import React, { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component';

export const DataTables = () => {
    const [data, setData] = useState([]);

    const columns = [
        {
        name: 'Nom',
        selector: 'nom',
        sortable: true,
        },
        {
        name: 'Prénom',
        selector: 'prenom',
        sortable: true,
        },
        {
        name: 'Age',
        selector: 'age',
        sortable: true,
        },
    ];

    useEffect(() => {
        fetch('https://exemple.com/api/data')
        .then(response => response.json())
        .then(data => setData(data));
    }, []);

    return (
        <div>
        <DataTable
            title="Liste des utilisateurs"
            columns={columns}
            data={data}
            pagination={true}
            searchable={true}
        />
        </div>
    );
}

export default DataTables;