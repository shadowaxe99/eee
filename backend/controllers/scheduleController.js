```javascript
const Schedule = require('../models/Schedule');
const scheduleUtils = require('../utils/scheduleUtils');

// Get all schedules
exports.getAllSchedules = async (req, res) => {
    try {
        const schedules = await Schedule.find();
        res.status(200).json(schedules);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific schedule
exports.getSchedule = async (req, res) => {
    try {
        const schedule = await Schedule.findById(req.params.id);
        if (schedule == null) {
            return res.status(404).json({ message: 'Cannot find schedule' });
        }
        res.status(200).json(schedule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new schedule
exports.createSchedule = async (req, res) => {
    const schedule = new Schedule({
        meetingDetails: req.body.meetingDetails,
        influencer: req.body.influencer,
        brand: req.body.brand,
        status: req.body.status
    });

    try {
        const newSchedule = await schedule.save();
        res.status(201).json(newSchedule);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a schedule
exports.updateSchedule = async (req, res) => {
    try {
        const updatedSchedule = await Schedule.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedSchedule);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Delete a schedule
exports.deleteSchedule = async (req, res) => {
    try {
        await Schedule.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Deleted Schedule' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// AI agent to schedule a meeting
exports.aiScheduleMeeting = async (req, res) => {
    try {
        const meetingDetails = await scheduleUtils.aiScheduleMeeting(req.body.influencer, req.body.brand);
        const schedule = new Schedule({
            meetingDetails: meetingDetails,
            influencer: req.body.influencer,
            brand: req.body.brand,
            status: 'Scheduled'
        });
        const newSchedule = await schedule.save();
        res.status(201).json(newSchedule);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
```