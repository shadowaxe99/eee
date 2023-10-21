```javascript
const express = require('express');
const router = express.Router();
const scheduleController = require('../controllers/scheduleController');

// Middleware to check if the user is authenticated
const isAuthenticated = require('../utils/authUtils').isAuthenticated;

// Route to get all schedules
router.get('/', isAuthenticated, scheduleController.getAllSchedules);

// Route to get a specific schedule by id
router.get('/:id', isAuthenticated, scheduleController.getScheduleById);

// Route to create a new schedule
router.post('/', isAuthenticated, scheduleController.createSchedule);

// Route to update a schedule
router.put('/:id', isAuthenticated, scheduleController.updateSchedule);

// Route to delete a schedule
router.delete('/:id', isAuthenticated, scheduleController.deleteSchedule);

module.exports = router;
```