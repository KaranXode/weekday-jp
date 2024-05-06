import React, { useState } from 'react';
import Filter from './Filter';
import Jobcard from './Jobcard';

const JobsPage = () => {
    const [filters, setFilters] = useState({});

    return (
        <>
            <Filter setFilters={setFilters} />
            <Jobcard filters={filters} />
        </>
    );
};

export default JobsPage;
