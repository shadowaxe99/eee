```javascript
import React, { useState, useEffect } from 'react';
import contractService from '../services/contractService';

const Contract = () => {
    const [contracts, setContracts] = useState([]);

    useEffect(() => {
        fetchContracts();
    }, []);

    const fetchContracts = async () => {
        const response = await contractService.getAll();
        setContracts(response.data);
    };

    return (
        <div>
            <h2>Contracts</h2>
            {contracts.map((contract, index) => (
                <div key={index}>
                    <h3>{contract.title}</h3>
                    <p>{contract.description}</p>
                    <p>Status: {contract.status}</p>
                    <p>Brand: {contract.brand}</p>
                    <p>Influencer: {contract.influencer}</p>
                </div>
            ))}
        </div>
    );
};

export default Contract;
```