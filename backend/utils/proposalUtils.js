```javascript
const Proposal = require('../models/Proposal');

// Function to create a new proposal
const createProposal = async (proposalData) => {
    try {
        const proposal = new Proposal(proposalData);
        await proposal.save();
        return proposal;
    } catch (error) {
        throw error;
    }
}

// Function to get all proposals
const getAllProposals = async () => {
    try {
        const proposals = await Proposal.find();
        return proposals;
    } catch (error) {
        throw error;
    }
}

// Function to get a proposal by ID
const getProposalById = async (proposalId) => {
    try {
        const proposal = await Proposal.findById(proposalId);
        return proposal;
    } catch (error) {
        throw error;
    }
}

// Function to update a proposal
const updateProposal = async (proposalId, updatedData) => {
    try {
        const proposal = await Proposal.findByIdAndUpdate(proposalId, updatedData, { new: true });
        return proposal;
    } catch (error) {
        throw error;
    }
}

// Function to delete a proposal
const deleteProposal = async (proposalId) => {
    try {
        await Proposal.findByIdAndDelete(proposalId);
    } catch (error) {
        throw error;
    }
}

module.exports = {
    createProposal,
    getAllProposals,
    getProposalById,
    updateProposal,
    deleteProposal
}
```