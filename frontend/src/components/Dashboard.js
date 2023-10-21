```javascript
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import authService from '../services/authService';
import aiService from '../services/aiService';
import brandService from '../services/brandService';
import proposalService from '../services/proposalService';
import contractService from '../services/contractService';
import scheduleService from '../services/scheduleService';

const Dashboard = () => {
    const [user, setUser] = useState(null);
    const [brands, setBrands] = useState([]);
    const [proposals, setProposals] = useState([]);
    const [contracts, setContracts] = useState([]);
    const [schedules, setSchedules] = useState([]);
    const history = useHistory();

    useEffect(() => {
        const fetchUser = async () => {
            const response = await authService.getUser();
            setUser(response.data);
        };

        const fetchBrands = async () => {
            const response = await brandService.getBrands();
            setBrands(response.data);
        };

        const fetchProposals = async () => {
            const response = await proposalService.getProposals();
            setProposals(response.data);
        };

        const fetchContracts = async () => {
            const response = await contractService.getContracts();
            setContracts(response.data);
        };

        const fetchSchedules = async () => {
            const response = await scheduleService.getSchedules();
            setSchedules(response.data);
        };

        fetchUser();
        fetchBrands();
        fetchProposals();
        fetchContracts();
        fetchSchedules();
    }, []);

    const logout = () => {
        authService.logout();
        history.push('/login');
    };

    return (
        <div>
            <h1>Welcome, {user ? user.username : ''}</h1>
            <button onClick={logout}>Logout</button>
            <h2>Your Brands</h2>
            {brands.map((brand) => (
                <div key={brand.id}>
                    <h3>{brand.name}</h3>
                </div>
            ))}
            <h2>Your Proposals</h2>
            {proposals.map((proposal) => (
                <div key={proposal.id}>
                    <h3>{proposal.title}</h3>
                </div>
            ))}
            <h2>Your Contracts</h2>
            {contracts.map((contract) => (
                <div key={contract.id}>
                    <h3>{contract.title}</h3>
                </div>
            ))}
            <h2>Your Schedules</h2>
            {schedules.map((schedule) => (
                <div key={schedule.id}>
                    <h3>{schedule.title}</h3>
                </div>
            ))}
        </div>
    );
};

export default Dashboard;
```