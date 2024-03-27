
import React, { useState, useEffect } from "react";
import { NavLink } from 'react-router-dom';
//import axios from "axios";
import "./Products.css";
import image1 from "../Products/inter1.jpg";
import image2 from "../Products/inter2.jpg";
import image3 from "../Products/inter3.jpg";
import image4 from "../Products/inter4.jpg";
import image5 from "../Products/inter5.jpg";
import image6 from "../Products/inter6.jpg";
import image7 from "../Products/inter7.jpg";
import image8 from "../Products/inter8.jpg";
import image9 from "../Products/inter9.jpg";
import Moreingo from './Moreingo';





//import { Link } from "react-router-dom";
const Vehicles = () => {
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
      title: "Royal Enfield Classic 350",
      Categories:": Furniture, Shop",
      price: "1087 ",
      price1: "17990 ",
      description:
        "The Classic’s runs have been limited to everyday commutes and short weekend jaunts. Nevertheless, I had to test the motorcycle’s touring mettle because a lot of Classics are used for that purpose. ",
      price: " 1530 ",
      image: image1,
      Rate: 4,
      amount: 173562,
    },
    {
      id: 2,
      title: "Hyundai Creta",
      Categories: "Furniture, Shop",
      price: "18700 ",
      price1: "19200 ",
      description:
        "The Hyundai Creta retained its position as the best-seller SUV in September 2023 with 12,717 units sold. Notably, it offers both petrol and diesel engine options with manual and automatic transmissions.",
      image: image2,
      Rate: 4.5,
      amount: 1,
    },
    {
      id: 3,
      title:"Royal Enfield Continental GT 650",
      Categories: "Lighting, Shop",
      price: "173562",
      price1: "273562",
      description: 
      "The dearth of updates since its inception in 2018 meant it had started looking and feeling old. Hence, to breathe a fresh lease of life into the GT 650, RE bestowed the bike with a few visual and functional updates for 2023.",

      image: image3,
      Rate: 5,
      amount: 1,
    },
    {
      id: 4,
      title: "Kia Seltos",
      Categories: " Lighting, Shop",
      price: "10900  ",
      price1: "20300 Lakh",
      description:
        "The Kia Seltos has witnessed a price cut for the first time. Select variants of the model have witnessed a downward revision of Rs. 2,000. The model is priced between Rs. 10.90-20.30 lakh (all prices, ex-showroom). 27 Nov 2023",
        
      image: image4,
      Rate: 3.5,
      amount: 1,
    },
    {
      id: 5,
      title: "Royal Enfield Himalayan",
      Categories: "Lighting, Shop",
      price: "215881  ",
      price1: "315881",
      description:
      "The product is High quality with multi options and colors. high efficiency, performance and What separates Westy from all other web design",

      image: image5,
      Rate: 3,
      amount: 1,
    },
    {
      id: 6,
      title:"Yamaha Ray ZR 125",
        Categories: "Lighting",
      price: "86789 ",
      price1: "96789",
      description:
      "Yamaha Motor India created a niche for itself in the Honda Activa-dominated 110c scooter segment by introducing the Ray ZR Street Rally over two years ago. We tested the Yamaha Ray ZR Street Rally BS6, and here is our road test review about the scooter.",

      image: image6,
      Rate: 4,
      amount: 1,
    },
    {
      id: 7,
      title: "Hyundai Creta facelift",
      Categories: "stuff",
      price: " 11000  ",
      price1: "18000",
      description:
      "The product is High quality with multi options and colors. high efficiency, performance and What separates Westy from all other web design",

      image: image7,
      Rate: 4.5,
      amount: 1,
    },
    {
      id: 8,
      title: "Yamaha Fascino 125",
      Categories: "Lighting, Shop",
      price: "81975",
      price1: "91975",
      description:
      "The new Yamaha Fascino 125 and the Ray ZR 125, along with the Hybrid badge, benefit from newer features. We tested both scooters for a comprehensive road test review, and here I tell you everything about the updated Fascino 125 Hybrid.",

      image: image8,
      Rate: 5,
      amount: 1,
    },
    {
      id: 9,
      title: "Yamaha YZF-R3 Colours",
      Categories: "stuff",
      price: "465260 ",
      price1: "565260",
      description:
      "The YZF-R3 is one of those motorcycles that every bike enthusiast in India knows about. Yamaha sold a few hundred units of it in India a few years ago, but the bike had to be discontinued due to the implementation of stringent emission norms. ",

      image: image9,
      Rate: 4,
      amount: 1,
    },
    {
      id: 2,
      title: "Hyundai Creta",
      Categories: "Furniture, Shop",
      price: "10870  ",
      price1: "19200 ",
      description:
        "The Hyundai Creta retained its position as the best-seller SUV in September 2023 with 12,717 units sold. Notably, it offers both petrol and diesel engine options with manual and automatic transmissions.",
      image: image2,
      Rate: 4.5,
      amount: 1,
    },
    {
      id: 4,
      title: "Kia Seltos",
      Categories: " Lighting, Shop",
      price: " 10900  ",
      price1: "20300",
      description:
        "The Kia Seltos has witnessed a price cut for the first time. Select variants of the model have witnessed a downward revision of Rs. 2,000. The model is priced between Rs. 10.90-20.30 lakh (all prices, ex-showroom). 27 Nov 2023",
        
      image: image4,
      Rate: 3.5,
      amount: 1,
    },
    {
      id: 1,
      title: "Royal Enfield Classic 350",
      Categories:": Furniture, Shop",
      price: "173562",
      description:
        "The Classic’s runs have been limited to everyday commutes and short weekend jaunts. Nevertheless, I had to test the motorcycle’s touring mettle because a lot of Classics are used for that purpose. ",
      price1: "273562 ",
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

export default Vehicles;