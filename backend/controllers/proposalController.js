```javascript
const Proposal = require('../models/Proposal');
const aiUtils = require('../utils/aiUtils');

// Get all proposals
exports.getProposals = async (req, res) => {
    try {
        const proposals = await Proposal.find();
        res.status(200).json(proposals);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Get a specific proposal
exports.getProposal = async (req, res) => {
    try {
        const proposal = await Proposal.findById(req.params.id);
        if (proposal == null) {
            return res.status(404).json({ message: 'Cannot find proposal' });
        }
        res.status(200).json(proposal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Create a new proposal
exports.createProposal = async (req, res) => {
    const proposal = new Proposal({
        influencer: req.body.influencer,
        brand: req.body.brand,
        details: req.body.details
    });

    try {
        const newProposal = await proposal.save();
        res.status(201).json(newProposal);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
};

// Update a proposal
exports.updateProposal = async (req, res) => {
    try {
        const proposal = await Proposal.findById(req.params.id);
        if (proposal == null) {
            return res.status(404).json({ message: 'Cannot find proposal' });
        }

        if (req.body.influencer != null) {
            proposal.influencer = req.body.influencer;
        }
        if (req.body.brand != null) {
            proposal.brand = req.body.brand;
        }
        if (req.body.details != null) {
            proposal.details = req.body.details;
        }

        const updatedProposal = await proposal.save();
        res.status(200).json(updatedProposal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Delete a proposal
exports.deleteProposal = async (req, res) => {
    try {
        const proposal = await Proposal.findById(req.params.id);
        if (proposal == null) {
            return res.status(404).json({ message: 'Cannot find proposal' });
        }

        await proposal.remove();
        res.status(200).json({ message: 'Deleted proposal' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// Generate a proposal using AI
exports.generateProposal = async (req, res) => {
    try {
        const proposalDetails = await aiUtils.generateProposal(req.body.influencer, req.body.brand);
        const proposal = new Proposal({
            influencer: req.body.influencer,
            brand: req.body.brand,
            details: proposalDetails
        });

        const newProposal = await proposal.save();
        res.status(201).json(newProposal);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};
```