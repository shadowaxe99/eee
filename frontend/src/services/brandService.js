```javascript
import axios from 'axios';

const API_URL = process.env.REACT_APP_API_URL;

export const getBrandList = async () => {
  try {
    const response = await axios.get(`${API_URL}/brands`);
    return response.data;
  } catch (error) {
    console.error('Error fetching brand list', error);
    throw error;
  }
};

export const getBrandDetails = async (brandId) => {
  try {
    const response = await axios.get(`${API_URL}/brands/${brandId}`);
    return response.data;
  } catch (error) {
    console.error(`Error fetching details for brand ${brandId}`, error);
    throw error;
  }
};
```