import React from 'react';
import './Shirt.css'
import { Link } from 'react-router-dom';
const Shirt = ({shirt,handlePurchase}) => {
    const {name, price, picture, _id} = shirt;

    return (
        <div className='shirt-container'>
            <img src={picture} alt="" />
            <h2>{name}</h2>
            <p>Price: $ {price}</p>
            <button onClick={()=>handlePurchase(shirt)}>Purchase</button>
        </div>
    );
};

export default Shirt;