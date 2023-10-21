```javascript
const Brand = require('../models/Brand');

// Function to get all brands
const getAllBrands = async () => {
  try {
    const brands = await Brand.find();
    return brands;
  } catch (error) {
    throw error;
  }
};

// Function to get a brand by ID
const getBrandById = async (brandId) => {
  try {
    const brand = await Brand.findById(brandId);
    return brand;
  } catch (error) {
    throw error;
  }
};

// Function to create a new brand
const createBrand = async (brandData) => {
  try {
    const newBrand = new Brand(brandData);
    const savedBrand = await newBrand.save();
    return savedBrand;
  } catch (error) {
    throw error;
  }
};

// Function to update a brand
const updateBrand = async (brandId, brandData) => {
  try {
    const updatedBrand = await Brand.findByIdAndUpdate(brandId, brandData, { new: true });
    return updatedBrand;
  } catch (error) {
    throw error;
  }
};

// Function to delete a brand
const deleteBrand = async (brandId) => {
  try {
    const deletedBrand = await Brand.findByIdAndDelete(brandId);
    return deletedBrand;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllBrands,
  getBrandById,
  createBrand,
  updateBrand,
  deleteBrand
};
```