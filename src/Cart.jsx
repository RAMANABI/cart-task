import React from 'react'
import './App.css';

function Cart({cartItems, removeFromCart}) {

  return (
    <>
      <h2 id="total">Cart Items: ({cartItems.length})</h2>
      <div className="container">
        {cartItems.map((item) => (
          <div className="content" key={item.id}>
            <img src={item.image} />
            <h3>{item.name}</h3>
            <h6>{item.price}</h6>
            <button id="btn" onClick={() => removeFromCart(item)}>
              Remove From Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export default Cart