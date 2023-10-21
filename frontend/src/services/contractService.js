```javascript
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getContractList = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/contracts/${userId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching contract list', error);
        throw error;
    }
};

export const getContractDetails = async (contractId) => {
    try {
        const response = await axios.get(`${API_URL}/contracts/details/${contractId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching contract details', error);
        throw error;
    }
};

export const generateContract = async (proposalId) => {
    try {
        const response = await axios.post(`${API_URL}/contracts/generate`, { proposalId });
        return response.data;
    } catch (error) {
        console.error('Error generating contract', error);
        throw error;
    }
};

export const updateContract = async (contractId, contractData) => {
    try {
        const response = await axios.put(`${API_URL}/contracts/${contractId}`, contractData);
        return response.data;
    } catch (error) {
        console.error('Error updating contract', error);
        throw error;
    }
};

export const deleteContract = async (contractId) => {
    try {
        const response = await axios.delete(`${API_URL}/contracts/${contractId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting contract', error);
        throw error;
    }
};
```