import React from "react";

const Cart = ({ cart, handleRemoveFromCart}) => {
  return (
    <div>
      <h3>Order Summary</h3>
      {cart.length == 2  ? <span>Add more product</span> : <span>Minimum add two products</span> }
      {cart.map((shirt) => (
        <p key={shirt._id}>
          {shirt.name} <button onClick={()=>handleRemoveFromCart(shirt._id)}>X</button>
        </p>
      ))}
    </div>
  );
};

export default Cart;
