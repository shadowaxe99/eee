```javascript
const Brand = require('../models/Brand');
const brandUtils = require('../utils/brandUtils');

// Get all brands
exports.getAllBrands = async (req, res) => {
    try {
        const brands = await Brand.find();
        res.status(200).json({
            status: 'success',
            results: brands.length,
            data: {
                brands
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

// Get a brand by ID
exports.getBrand = async (req, res) => {
    try {
        const brand = await Brand.findById(req.params.id);
        res.status(200).json({
            status: 'success',
            data: {
                brand
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

// Create a new brand
exports.createBrand = async (req, res) => {
    try {
        const newBrand = await Brand.create(req.body);
        res.status(201).json({
            status: 'success',
            data: {
                brand: newBrand
            }
        });
    } catch (err) {
        res.status(400).json({
            status: 'fail',
            message: err
        });
    }
};

// Update a brand
exports.updateBrand = async (req, res) => {
    try {
        const brand = await Brand.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true
        });
        res.status(200).json({
            status: 'success',
            data: {
                brand
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

// Delete a brand
exports.deleteBrand = async (req, res) => {
    try {
        await Brand.findByIdAndDelete(req.params.id);
        res.status(204).json({
            status: 'success',
            data: null
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};

// Get brand suggestions for an influencer
exports.getSuggestions = async (req, res) => {
    try {
        const suggestions = await brandUtils.getSuggestions(req.params.influencerId);
        res.status(200).json({
            status: 'success',
            data: {
                suggestions
            }
        });
    } catch (err) {
        res.status(404).json({
            status: 'fail',
            message: err
        });
    }
};
```