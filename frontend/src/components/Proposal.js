```javascript
import React, { useState, useEffect } from 'react';
import proposalService from '../services/proposalService';

const Proposal = () => {
    const [proposals, setProposals] = useState([]);

    useEffect(() => {
        fetchProposals();
    }, []);

    const fetchProposals = async () => {
        const response = await proposalService.getProposals();
        setProposals(response.data);
    };

    return (
        <div>
            <h2>Proposals</h2>
            {proposals.map((proposal, index) => (
                <div key={index}>
                    <h3>{proposal.title}</h3>
                    <p>{proposal.description}</p>
                    <p>Status: {proposal.status}</p>
                </div>
            ))}
        </div>
    );
};

export default Proposal;
```