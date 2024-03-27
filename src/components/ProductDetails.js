import React from 'react';
import { useParams } from 'react-router-dom';

const ProductDetailsPage = ({ products }) => {
  const { productId } = useParams();
  const product = products.find((p) => p.id === parseInt(productId, 10));

  if (!product) {
    return <div>Loading...</div>; // or handle the case where the product is not found
  }

  return (
    <div>
      <h1>{product.title}</h1>
      {/* Display other product details as needed */}
    </div>
  );
};

export default ProductDetailsPage;
