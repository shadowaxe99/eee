```javascript
const express = require('express');
const router = express.Router();
const aiController = require('../controllers/aiController');

// Route to assign AI agent to a user
router.post('/assignAgent', aiController.assignAgent);

// Route to analyze user profile
router.post('/analyzeProfile', aiController.analyzeProfile);

// Route to suggest brand partnerships
router.get('/suggestPartnership', aiController.suggestPartnership);

// Route to initiate communication with brands
router.post('/initiateCommunication', aiController.initiateCommunication);

// Route to create proposal deck
router.post('/createProposal', aiController.createProposal);

// Route to manage email communications and follow-ups
router.post('/manageEmails', aiController.manageEmails);

// Route to generate contract
router.post('/generateContract', aiController.generateContract);

// Route to schedule meetings
router.post('/scheduleMeeting', aiController.scheduleMeeting);

module.exports = router;
```