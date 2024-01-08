import React from 'react'

function Product(props) {
  return (
    <div className="product">
      <div>
        <img src={props.product.image} />
        <h3>{props.product.name}</h3>
        <p>{props.product.price}</p>
        {props.isInCart ? (
          <button id='btn'onClick={() => props.removeFromCart(props.product)}>
            Remove From Cart
          </button>
        ) : (
          <button id='btn' onClick={() => props.addToCart(props.product)}>
            Add To Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default Product
