```javascript
const express = require('express');
const router = express.Router();
const brandController = require('../controllers/brandController');

// Route to get all brands
router.get('/', brandController.getBrandList);

// Route to get details of a specific brand
router.get('/:brandId', brandController.getBrandDetails);

module.exports = router;
```