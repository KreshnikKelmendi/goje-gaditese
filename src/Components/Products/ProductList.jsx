import React from 'react';

import ProdCard from './ProdCard'; // Adjust the import path as needed
import { products } from './products';

const ProductsList = () => {
  return (
    <div className="lg:px-[60px] px-5 grid lg:grid-cols-2 gap-4 mt-12">
      {products.map((product) => (
        <ProdCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductsList;
