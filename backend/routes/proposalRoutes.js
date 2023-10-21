```javascript
const express = require('express');
const router = express.Router();
const proposalController = require('../controllers/proposalController');

// Middleware to check if the user is authenticated
const isAuthenticated = require('../utils/authUtils').isAuthenticated;

// Route to get all proposals
router.get('/', isAuthenticated, proposalController.getProposalList);

// Route to get a specific proposal by ID
router.get('/:id', isAuthenticated, proposalController.getProposalDetails);

// Route to create a new proposal
router.post('/', isAuthenticated, proposalController.createProposal);

// Route to update a proposal
router.put('/:id', isAuthenticated, proposalController.updateProposal);

// Route to delete a proposal
router.delete('/:id', isAuthenticated, proposalController.deleteProposal);

module.exports = router;
```