```javascript
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getProposalList = async () => {
  try {
    const response = await axios.get(`${API_URL}/proposals`);
    return response.data;
  } catch (error) {
    console.error('Error fetching proposal list', error);
    throw error;
  }
};

export const getProposalDetails = async (proposalId) => {
  try {
    const response = await axios.get(`${API_URL}/proposals/${proposalId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for proposal ${proposalId}`, error);
    throw error;
  }
};

export const createProposal = async (proposalData) => {
  try {
    const response = await axios.post(`${API_URL}/proposals`, proposalData);
    return response.data;
  } catch (error) {
    console.error('Error creating proposal', error);
    throw error;
  }
};

export const updateProposal = async (proposalId, updatedData) => {
  try {
    const response = await axios.put(`${API_URL}/proposals/${proposalId}`, updatedData);
    return response.data;
  } catch (error) {
    console.error(`Error updating proposal ${proposalId}`, error);
    throw error;
  }
};

export const deleteProposal = async (proposalId) => {
  try {
    const response = await axios.delete(`${API_URL}/proposals/${proposalId}`);
    return response.data;
  } catch (error) {
    console.error(`Error deleting proposal ${proposalId}`, error);
    throw error;
  }
};
```