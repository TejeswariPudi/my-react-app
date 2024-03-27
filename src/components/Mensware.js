
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//import axios from "axios";
import "./Outfits.css";
import image1 from "../Products/mens1.webp";
import image2 from "../Products/mens2.webp";
import image3 from "../Products/mens3.webp";
import image4 from "../Products/mens4.webp";
import image5 from "../Products/mens5.webp";
import image6 from "../Products/mens6.webp";
import image7 from "../Products/mens7.webp";
import image8 from "../Products/mens8.webp";
import image9 from "../Products/mens9.webp";
import Moreingo from './Moreingo';





//import { Link } from "react-router-dom";
const Mensware = () => {
  const initialCart = JSON.parse(localStorage.getItem("cart")) || [];
  const [cart, setCart] = useState(initialCart);
  const [showCart, setShowCart] = useState(false);
  const [search, setSearch] = useState("");
  const [filteredUsers, setFilteredUsers] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isAddToCartPopupOpen, setIsAddToCartPopupOpen] = useState(false);


  const showProductDetails = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const closeProductDetails = () => {
    setSelectedProduct(null);
    setIsPopupOpen(false);
  };
  

  

  const products = [
    {
      id: 1,
      title: "STONEBERG ",
      Categories:": Mens, Shop",
      price: "349",
      price: "349",
      description:
        "Men Slim Fit Solid Spread Collar Formal Shirt ",
      price1: " 599 ",
      image: image1,
      Rate: 4,
      amount: 1,
    },
    {
      id: 2,
      title: "VeBNoR ",
      Categories: "Mens, Shop",
      price: "319  ",
      price1: "999",
      description:
        "Men Regular Fit Solid Button Down Collar Formal Shirt",
      image: image2,
      Rate: 4.5,
      amount: 1,
    },
    {
      id: 3,
      title:"STONEBERG",
      Categories: "Mens, Shop",
      price: "349",
      price1: "1599",
      description: 
      "Men Slim Fit Solid Spread Collar Formal Shirt.",

      image: image3,
      Rate: 5,
      amount: 1,
    },
    {
      id: 4,
      title: "STONEBERG",
      Categories: " Mens, Shop",
      price: "349 ",
      price1: "1599",
      description:
        "Men Slim Fit Solid Spread Collar Formal Shirt",
        
      image: image4,
      Rate: 3.5,
      amount: 1,
    },
    {
      id: 5,
      title: "youth first ",
      Categories: "Mens, Shop",
      price: "349  ",
      price1: "1599",
      description:
      "Men Regular Fit Solid Curved Collar Formal Shirt",

      image: image5,
      Rate: 3,
      amount: 1,
    },
    {
      id: 6,
      title:"BLUE MARTIN ",
        Categories: "Mens,Shop",
      price: "349 ",
      price1: "1599",
      description:
      "Men Regular Fit Solid Button Down Collar Formal Shirt.",

      image: image6,
      Rate: 4,
      amount: 1,
    },
    {
      id: 7,
      title: "GHPC",
      Categories: "Mens,Shop",
      price: " 690  ",
      price1: "1200",
      description:
      "Men Slim Fit Solid Spread Collar Formal Shirt",

      image: image7,
      Rate: 4.5,
      amount: 1,
    },
    {
      id: 8,
      title: "BLUE MARTIN",
      Categories: "Mens, Shop",
      price: "700",
      price1: "1500",
      description:
      "Men Slim Fit Solid Spread Collar Formal Shirt.",

      image: image8,
      Rate: 5,
      amount: 1,
    },
    {
      id: 9,
      title: "GHPC",
      Categories: "Mens.Shop",
      price: "250",
      price1: "1700",
      description:
      "Men Slim Fit Solid Spread Collar Formal Shirt. ",

      image: image9,
      Rate: 4,
      amount: 1,
    },
    {
      id: 2,
      title: "BLUE MARTIN",
      Categories: "Mens, Shop",
      price: "500  ",
      price1: "800",
      description:
        "Men Slim Fit Solid Spread Collar Formal Shirt.",
      image: image2,
      Rate: 4.5,
      amount: 1,
    },
    {
      id: 4,
      title: "GHPC",
      Categories: " Mens, Shop",
      price: " 250 ",
      price1: "900",
      description:
        "Men Slim Fit Solid Spread Collar Formal Shirt",
        
      image: image4,
      Rate: 3.5,
      amount: 1,
    },
    {
      id: 1,
      title: "BLUE MARTIN",
      Categories:": Mens, Shop",
      price: "700",
      description:
        "Men Slim Fit Solid Spread Collar Formal Shirt. ",
      price1: "1400 ",
      image: image1,
      Rate: 4,
      amount: 1,
    },
    
  ];

  useEffect(() => {
    setFilteredUsers(
      products.filter((product) =>
        product.title.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search,products]);

  const addToCart = (product) => {
    const existingItem = cart.find((item) => item.id === product.id);

    if (existingItem) {
      // If the item is already in the cart, update its quantity
      const updatedCart = cart.map((item) =>
        item.id === product.id ? { ...item, amount: item.amount + 1 } : item
      );
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    } else {
      // If the item is not in the cart, add it with quantity 1
      const updatedCart = [...cart, { ...product, amount: 1 }];
      setCart(updatedCart);
      localStorage.setItem("cart", JSON.stringify(updatedCart));
    }
  };

  const removeFromCart = (productId) => {
    const updatedCart = cart.filter((item) => item.id !== productId);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const incrementQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId ? { ...item, amount: item.amount + 1 } : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const decrementQuantity = (productId) => {
    const updatedCart = cart.map((item) =>
      item.id === productId && item.amount > 1
        ? { ...item, amount: item.amount - 1 }
        : item
    );
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const calculateTotalPrice = () => {
    return cart.reduce(
      (total, item) => 
      total + parseFloat(item.price)* parseInt(item.amount), 0);
  };

  const Truncate = (string, number) => {
    if (!string) {
      return null;
    }
    if (string.length <= number) {
      return string;
    }
    return string.slice(0, number) + "...";
  };

  const ShowProductDetails = (product) => {
    setSelectedProduct(product);
    setIsPopupOpen(true);
  };

  const CloseProductDetails = () => {
    setSelectedProduct(null);
    setIsPopupOpen(false);
  };

  return (
    <div className="main0">
      <h1 style={{ color: "#042148" }}>Products</h1>
      <div>
        <input
          type="text"
          className="card-input"
          placeholder="Search Products"
          onChange={(e) => setSearch(e.target.value)}
          style={{ marginLeft: "70%", width: "300px", marginTop: "-35px" }}
        />
        <div style={{ marginTop: "-2%" }}>
          <button
            onClick={() => setShowCart(!showCart)}
            style={{ backgroundColor: '#009146',color: '#fff',border: 'none',padding: '8px 15px',margin: '5px auto',borderRadius: '5px', cursor: 'pointer',display: 'block', }}
          >
            Cart: {cart.length}
          </button>
        </div>
      </div>

      <hr></hr>

      {filteredUsers?.length ? (
        <div className="main">
          {filteredUsers.map((e) => {
            return (
              <div className="Product-card" key={e.id}>
                <img src={e.image} className="Product-image" alt="..." />
                <div className="Product-body">
                  <h5 className="Product-title" style={{ color: 'black' }}>{Truncate(e.title, 20)}</h5>
                  <p className="Product-text"style={{ color: 'black' }}>{Truncate(e.description, 55)}</p>
                  <h5 className="Product-text"style={{ color: 'black' }}>
                    Price: {parseFloat(e.price)}Rs/- <del>{parseFloat(e.price1)}</del>
                  </h5>
                  <div className="cart-buttons">
                    <button onClick={() => addToCart(e)} className="product-button1">
                    
                      Add To Cart
                    </button>


                    <button onClick={() => showProductDetails(e)} className="product-button2">
                  
                  
                
                  More Info
                </button>                 


                  </div>
                  
                </div>
              </div>
            );
          })}
        </div>
      ) : (
        <div className="no-products">
          <h1 className="no-products1" style={{ color: '#e74c3c' }}>Sorry ☹️!!!</h1>
          <h1 className="no-products2"style={{ color: '#c0392b' }}>No Result!!!</h1>
        </div>
      )}

      {showCart && (
        <div className="cart-section" style={{ color: 'black', 'div&': { color: 'black' } }}>

          <hr></hr>
          <h2>Cart items</h2>
          {cart.map((item) => (
            <div key={item.id} className="cart-item">
              <img src={item.image} alt="..." style={{width:"200px",height:"100%",borderRadius:"0"}}/>  
              <div className="cart-item-details" style={{ marginLeft: "20%", color: "black" }}>
                <p>ID: {item.id}</p>
                <p>Description: {item.description}</p>
                <p>Price: {item.price}Rs/-</p>
                <p>Category: {item.Categories}</p>
                <p>Quantity: {item.amount}</p>
                <div className="quantity-buttons">
                  <button onClick={() => incrementQuantity(item.id)}
      style={{backgroundColor: ' lightblue',  // Set the background color to blue
      color: 'black',           // Set the text color to black
      border: 'none',
      padding: '8px 15px',
      margin: '5px',
      borderRadius: '5px',
      cursor: 'pointer',
    }}
  >
                    +
                  </button>
                  <button onClick={() => decrementQuantity(item.id)}
                  style={{backgroundColor: 'lightblue',  // Set the background color to blue
                    color: 'black',           // Set the text color to black
                    border: 'none',
                    padding: '8px 15px',
                    margin: '5px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                    -
                  </button>
                  <button onClick={() => removeFromCart(item.id)}
                   style={{backgroundColor: 'lightblue',  // Set the background color to blue
                    color: 'black',           // Set the text color to black
                    border: 'none',
                    padding: '8px 15px',
                    margin: '5px',
                    borderRadius: '5px',
                    cursor: 'pointer',
                  }}
                >
                    Remove
                  </button>
                
                </div>
                
              </div>
              <hr></hr>
            </div>
          ))}
          <div className="total-price">Total Price: {calculateTotalPrice()} Rs/-</div>
        </div>
          )}
      {isPopupOpen && selectedProduct && (
        <Moreingo
          product={selectedProduct}
          onClose={closeProductDetails}
        />
      )}
       {/*{selectedProduct && (
        <Moreingo
          product={selectedProduct}
          onClose={closeProductDetails}
        />
       )} */}
    </div>
  );
};

export default  Mensware;