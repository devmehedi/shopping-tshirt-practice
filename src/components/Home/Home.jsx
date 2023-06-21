import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Shirt from "../Shirt/Shirt";
import "./Home.css";
import Cart from "../Cart/Cart";
import { toast } from "react-hot-toast";

const Home = () => {
  const shirts = useLoaderData();
const [cart, setCart] = useState([]);

  const handlePurchase = shirt => {
    const exist = cart.find(ts=>ts._id === shirt._id);
    if(exist){
        toast('You have already added this product')
    }
    else{
        const newCart = [...cart, shirt];
        setCart(newCart)
    }
    
  };

  const handleRemoveFromCart = id =>{
    const remaining = cart.filter(ts=>ts._id !== id);
    setCart(remaining)
  }

  return (
    <div className="shop-container">
      <div className="shirts-container">
        {shirts.map((shirt) => (
          <Shirt key={shirt._id} shirt={shirt} handlePurchase={handlePurchase}></Shirt>
        ))}
      </div>
      <div className="cart-container">
        <Cart
        cart={cart}
        handleRemoveFromCart={handleRemoveFromCart}
        ></Cart>
      </div>
    </div>
  );
};

export default Home;
