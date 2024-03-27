import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../components/MoreingoStyles.css';

const Moreingo = ({ product, onClose }) => {
  const navigate = useNavigate();

  const handleBuyNow = () => {
    // You can perform any additional logic here before navigating
    // For now, let's navigate to the Login page
    navigate('/Login');
    onClose(); // Close the Moreingo popup after navigating
  };

  return (
    <div className="more-info-popup" style={{ color: 'black' }}>
      <div className="more-info-header">
        <h2 style={{ color: 'black' }}>{product.title}</h2>
        <button className="close-button" onClick={onClose}>
          Clear
        </button>
        <button className="buy-now-button" onClick={handleBuyNow}>
          Buy Now
        </button>
      </div>
      <div className="more-info-content"style={{ color: 'black' }}>
        <img src={product.image} alt={product.title} className="product-image" />
        <div className="product-details" style={{ color: 'black' }}>
          <p>ID: {product.id}</p>
          <p>Description: {product.description}</p>
          <p>Price: {product.price} Rs/-</p>
          <p>Category: {product.Categories}</p>
          <p>Rating: {product.Rate}</p>
          <p>Amount in Stock: {product.amount}</p>
          <p>Discounted Price: {product.price1} Rs/-</p>
          {/* Additional Details */}
          <p>Material: {product.material}</p>
          <p>Dimensions: {product.dimensions}</p>
          <p>Color: {product.color}</p>
          <p>Brand: {product.brand}</p>
          {/* ... Add more details as needed */}
          {/* "Buy Now" button */}
        </div>
      </div>
    </div>
  );
};

export default Moreingo;
