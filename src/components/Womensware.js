
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
//import axios from "axios";
import "./Outfits.css";
import image1 from "../Products/womens1.webp";
import image2 from "../Products/womens5.webp";
import image3 from "../Products/womens3.webp";
import image4 from "../Products/womens4.webp";
import image5 from "../Products/womens2.webp";
import image6 from "../Products/womens6.webp";
import image7 from "../Products/womens9.webp";
import image8 from "../Products/womens7.webp";
import image9 from "../Products/womens8.webp";
import Moreingo from './Moreingo';






const Womensware= () => {
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
      title: "J TURRITOPSIS   ",
      Categories:": Womens, Shop",
      price: "445",
      price: "599",
      description:
        "Printed Women Jumpsuit ",
      price1: " 1999 ",
      image: image1,
      Rate: 4,
      amount: 1,
    },
    {
      id: 2,
      title: "Fashionwear  ",
      Categories: "Womens, Shop",
      price: "469  ",
      price1: "999",
      description:
        "Women Fit and Flare Pink, Grey, Red Dress ",
      image: image2,
      Rate: 4.5,
      amount: 1,
    },
    {
      id: 3,
      title:"Jay Gopal Tex",
      Categories: "Womens, Shop",
      price: "628",
      price1: "2999",
      description: 
      "Printed Georgette Stitched Flared/A-line Gown  (White)",

      image: image3,
      Rate: 5,
      amount: 1,
    },
    {
      id: 4,
      title: "mokshi",
      Categories: " Womens, Shop",
      price: "359 ",
      price1: "2199",
      description:
        "Women Printed Pure Cotton A-line Kurta  (Yellow)",
        
      image: image4,
      Rate: 3.5,
      amount: 1,
    },
    {
      id: 5,
      title: "KOTTY Top Pant Co-ords Set with Blazer ",
      Categories: "Womens, Shop",
      price: "499  ",
      price1: "3999",
      description:
      "Womens KOTTY Top Pant Co-ords Set with Blazer",

      image: image5,
      Rate: 3,
      amount: 1,
    },
    {
      id: 6,
      title:"Jay Gopal Tex  ",
        Categories: "Womens,Shop",
      price: "639 ",
      price1: "2999",
      description:
      "Floral Print Georgette Stitched Anarkali Gown  (Yellow)",

      image: image6,
      Rate: 4,
      amount: 1,
    },
    {
      id: 7,
      title: "AND",
      Categories: "Womens,Shop",
      price: "1225 ",
      price1: "1699",
      description:
      "Casual Regular Sleeves Checkered Women Black Top",

      image: image7,
      Rate: 4.5,
      amount: 1,
    },
    {
      id: 8,
      title: "AND",
      Categories: "Mens, Shop",
      price: "919",
      price1: "2299",
      description:
      "Casual Regular Sleeves Printed Women Green Top",

      image: image8,
      Rate: 5,
      amount: 1,
    },
    {
      id: 9,
      title: "AND ",
      Categories: "Womensens,Shop",
      price: "250",
      price1: "1700",
      description:
      "Women Woven V Neck Purple Sweater ",

      image: image9,
      Rate: 4,
      amount: 1,
    },
    {
      id: 2,
      title: "Fashion2wear",
      Categories: "Womens, Shop",
      price: "469  ",
      price1: "999",
      description:
        "Women Fit and Flare Pink, Grey, Red Dress",
      image: image2,
      Rate: 4.5,
      amount: 1,
    },
    {
      id: 4,
      title: "mokshi ",
      Categories: " Mens, Shop",
      price: " 359 ",
      price1: "2199",
      description:
        "Women Printed Pure Cotton A-line Kurta  (Yellow)",
        
      image: image4,
      Rate: 3.5,
      amount: 1,
    },
    {
      id: 1,
      title: "J TURRITOPSIS ",
      Categories:":   Womens, Shop",
      price: "445",
      description:
        "Printed Women Jumpsuit. ",
      price1: "1999 ",
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

export default  Womensware;