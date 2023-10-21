```javascript
const Contract = require('../models/Contract');
const contractUtils = require('../utils/contractUtils');

exports.getContractList = async (req, res) => {
    try {
        const contracts = await Contract.find();
        res.status(200).json(contracts);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.getContractDetails = async (req, res) => {
    try {
        const contract = await Contract.findById(req.params.id);
        if (contract == null) {
            return res.status(404).json({ message: 'Contract not found' });
        }
        res.status(200).json(contract);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.createContract = async (req, res) => {
    try {
        const contractData = req.body;
        const contract = new Contract(contractData);
        const savedContract = await contract.save();
        res.status(201).json(savedContract);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.updateContract = async (req, res) => {
    try {
        const updatedContract = await Contract.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(200).json(updatedContract);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

exports.deleteContract = async (req, res) => {
    try {
        await Contract.findByIdAndDelete(req.params.id);
        res.status(200).json({ message: 'Contract deleted' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

exports.generateContract = async (req, res) => {
    try {
        const contractData = req.body;
        const generatedContract = contractUtils.generateContract(contractData);
        res.status(200).json(generatedContract);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
```