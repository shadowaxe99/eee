const express = require('express');
const router = express.Router();
const contractController = require('../controllers/contractController');
const authUtils = require('../utils/authUtils');

// Middleware to check if the user is authenticated
router.use(authUtils.isAuthenticated);

// Route to get all contracts
router.get('/', contractController.getAllContracts);

// Route to get a specific contract by id
router.get('/:id', contractController.getContractById);

// Route to create a new contract
router.post('/', contractController.createContract);

// Route to update a contract
router.put('/:id', contractController.updateContract);

// Route to delete a contract
router.delete('/:id', contractController.deleteContract);

module.exports = router;