```javascript
const axios = require('axios');

// AI Agent Assignment
const assignAgent = async (userId) => {
    try {
        const response = await axios.post('http://localhost:5000/ai/assign', { userId });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// User Profile Analysis
const analyzeProfile = async (userId) => {
    try {
        const response = await axios.post('http://localhost:5000/ai/analyze', { userId });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// Brand Partnership Suggestions
const suggestPartnership = async (userId) => {
    try {
        const response = await axios.post('http://localhost:5000/ai/suggest', { userId });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// Outreach and Communication
const initiateCommunication = async (userId, brandId) => {
    try {
        const response = await axios.post('http://localhost:5000/ai/communicate', { userId, brandId });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// Proposal Deck Creation
const createProposal = async (userId, brandId) => {
    try {
        const response = await axios.post('http://localhost:5000/ai/proposal', { userId, brandId });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// Email and Follow-ups
const manageEmails = async (userId, brandId) => {
    try {
        const response = await axios.post('http://localhost:5000/ai/emails', { userId, brandId });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// Contract Generation
const generateContract = async (userId, brandId) => {
    try {
        const response = await axios.post('http://localhost:5000/ai/contract', { userId, brandId });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

// Scheduling
const scheduleMeeting = async (userId, brandId) => {
    try {
        const response = await axios.post('http://localhost:5000/ai/schedule', { userId, brandId });
        return response.data;
    } catch (error) {
        console.error(error);
    }
}

module.exports = {
    assignAgent,
    analyzeProfile,
    suggestPartnership,
    initiateCommunication,
    createProposal,
    manageEmails,
    generateContract,
    scheduleMeeting
}
```