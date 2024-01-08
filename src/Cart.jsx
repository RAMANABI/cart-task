import React from 'react'
import './App.css';

function Cart({cartItems, removeFromCart}) {

  return (
    <>
      <h2 id="total">Cart Items: ({cartItems.length})</h2>
      <div className="container">
        {cartItems.map((item) => (
          <div className="content" key={item.id}>
            <h3>{item.name}</h3>
            <img src={item.image} />
            <button  id='btn'onClick={() => removeFromCart(item)}>
              Remove From Cart
            </button>
          </div>
        ))}
      </div>
      
    </>
  );
}

export default Cart