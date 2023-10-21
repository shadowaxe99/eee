```javascript
import React, { useEffect, useState } from 'react';
import { getBrandList } from '../services/brandService';

const BrandList = () => {
  const [brands, setBrands] = useState([]);

  useEffect(() => {
    fetchBrands();
  }, []);

  const fetchBrands = async () => {
    const response = await getBrandList();
    setBrands(response.data);
  };

  return (
    <div>
      <h2>Brand List</h2>
      {brands.length > 0 ? (
        <ul>
          {brands.map((brand, index) => (
            <li key={index}>
              <h3>{brand.name}</h3>
              <p>{brand.description}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No brands available at the moment.</p>
      )}
    </div>
  );
};

export default BrandList;
```