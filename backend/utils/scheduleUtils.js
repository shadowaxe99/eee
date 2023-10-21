```javascript
const Schedule = require('../models/Schedule');

// Function to create a new schedule
const createSchedule = async (scheduleDetails) => {
    try {
        const schedule = new Schedule(scheduleDetails);
        await schedule.save();
        return schedule;
    } catch (error) {
        throw error;
    }
}

// Function to get a schedule by ID
const getScheduleById = async (scheduleId) => {
    try {
        const schedule = await Schedule.findById(scheduleId);
        return schedule;
    } catch (error) {
        throw error;
    }
}

// Function to update a schedule
const updateSchedule = async (scheduleId, updatedDetails) => {
    try {
        const schedule = await Schedule.findByIdAndUpdate(scheduleId, updatedDetails, { new: true });
        return schedule;
    } catch (error) {
        throw error;
    }
}

// Function to delete a schedule
const deleteSchedule = async (scheduleId) => {
    try {
        await Schedule.findByIdAndDelete(scheduleId);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createSchedule,
    getScheduleById,
    updateSchedule,
    deleteSchedule
}
```