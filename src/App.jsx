import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route,BrowserRouter as Router,Routes} from 'react-router-dom';
import Product from './Product';
import Cart from './Cart';

function App() {
  const [products] = useState([
    {
      id:1,
      name:"BAG",
      price:"RS-300",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP8pj7rY2v5kf6RpH3raSz0DVUHX1TwYX_GYDja9cUzwjT_CTzXQ0TmZM75tJ92htsI2Y&usqp=CAU"
    },
    {
      id:3,
      name:"SPORT SHOE",
      price:"RS-2099",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQggxiUCrAr-eKG93gK548fWmkAd267UgFfYg&usqp=CAU"
    },
    {
      id:4,
      name:"EAR BUDS",
      price:"RS-750",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4QpXS-6XTTniPYBYIXRtvKh0GNu57ydR1dixOJVN_GwtQj8_xXszNoAo4QJ93txd-Sw&usqp=CAU"
    },
    {
      id:5,
      name:"BOOK",
      price:"RS-250",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fm3eODOzDzvdB_0D3eN09ZA2oXocTVLk8A&usqp=CAU"
    },
  ]);

 const[cart,setCart] = useState([]);

const addCart=(product) => {
  setCart([...cart, product])
 }
const removeCart = (producttoremove) => {
  setCart(cart.filter(product => product !== producttoremove))
 }
    


  return (
    <div>
      <header>
        <h1 class="head">PRODUCTS</h1>
      </header>
      <div class="container">
        {products.map((product) => (
          <div class="content">
            <Product
              product={product}
              addToCart={addCart}
              removeFromCart={removeCart}
              isInCart={cart.includes(product)}
            />
          </div>
        ))}

        <Cart cartItems={cart} removeFromCart={removeCart} />
      </div>
    </div>
  );
}

export default App
