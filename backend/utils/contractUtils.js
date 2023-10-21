```javascript
const Contract = require('../models/Contract');

// Function to create a new contract
const createContract = async (contractDetails) => {
    try {
        const contract = new Contract(contractDetails);
        await contract.save();
        return contract;
    } catch (error) {
        throw error;
    }
};

// Function to get a contract by ID
const getContractById = async (contractId) => {
    try {
        const contract = await Contract.findById(contractId);
        return contract;
    } catch (error) {
        throw error;
    }
};

// Function to update a contract
const updateContract = async (contractId, updatedDetails) => {
    try {
        const contract = await Contract.findByIdAndUpdate(contractId, updatedDetails, { new: true });
        return contract;
    } catch (error) {
        throw error;
    }
};

// Function to delete a contract
const deleteContract = async (contractId) => {
    try {
        await Contract.findByIdAndDelete(contractId);
    } catch (error) {
        throw error;
    }
};

module.exports = {
    createContract,
    getContractById,
    updateContract,
    deleteContract
};
```