```javascript
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getScheduleList = async (userId) => {
  try {
    const response = await axios.get(`${API_URL}/schedule/${userId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching schedule list', error);
    throw error;
  }
};

export const getScheduleDetails = async (scheduleId) => {
  try {
    const response = await axios.get(`${API_URL}/schedule/details/${scheduleId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching schedule details', error);
    throw error;
  }
};

export const createSchedule = async (scheduleData) => {
  try {
    const response = await axios.post(`${API_URL}/schedule/create`, scheduleData);
    return response.data;
  } catch (error) {
    console.error('Error creating schedule', error);
    throw error;
  }
};

export const updateSchedule = async (scheduleId, scheduleData) => {
  try {
    const response = await axios.put(`${API_URL}/schedule/update/${scheduleId}`, scheduleData);
    return response.data;
  } catch (error) {
    console.error('Error updating schedule', error);
    throw error;
  }
};

export const deleteSchedule = async (scheduleId) => {
  try {
    const response = await axios.delete(`${API_URL}/schedule/delete/${scheduleId}`);
    return response.data;
  } catch (error) {
    console.error('Error deleting schedule', error);
    throw error;
  }
};
```