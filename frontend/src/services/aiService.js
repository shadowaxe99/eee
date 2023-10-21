```javascript
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const assignAgent = async (userId) => {
    try {
        const response = await axios.post(`${API_URL}/ai/assign`, { userId });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const analyzeProfile = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/ai/analyze/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const suggestPartnership = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/ai/suggest/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const initiateCommunication = async (userId, brandId) => {
    try {
        const response = await axios.post(`${API_URL}/ai/communicate`, { userId, brandId });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createProposal = async (userId, brandId) => {
    try {
        const response = await axios.post(`${API_URL}/ai/proposal`, { userId, brandId });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const manageEmails = async (userId) => {
    try {
        const response = await axios.get(`${API_URL}/ai/manageEmails/${userId}`);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const generateContract = async (userId, brandId) => {
    try {
        const response = await axios.post(`${API_URL}/ai/contract`, { userId, brandId });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const scheduleMeeting = async (userId, brandId, date) => {
    try {
        const response = await axios.post(`${API_URL}/ai/schedule`, { userId, brandId, date });
        return response.data;
    } catch (error) {
        throw error;
    }
};
```