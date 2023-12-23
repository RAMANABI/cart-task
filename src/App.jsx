import { useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [products] = useState([
    {
      id:1,
      name:"JEAN SHIRT",
      price:"RS-650",
      image1:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmYtk0yi_ubOXwvJsOHpEmxbJ23gIi0vYxow&usqp=CAU"
    },
    {
      id:2,
      name:"BAG",
      price:"RS-450",
      image:"https://www.tradeindia.com/_next/image/?url=https%3A%2F%2Ftiimg.tistatic.com%2Ffp%2F1%2F007%2F700%2Fstylish-comfortable-adjustable-shoulder-strap-grey-and-black-school-bag--529.jpg&w=750&q=75"
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
  ])

  return (
     <div class="container">
   <div class="card">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1fm3eODOzDzvdB_0D3eN09ZA2oXocTVLk8A&usqp=CAU" id="img-1" alt="image"/>
       <div class="card-body">
         <h5>BOOK</h5>
         <p>RS-400</p>
         <button>Add to cart</button>
       </div>
     </div>

     <div class="card">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmYtk0yi_ubOXwvJsOHpEmxbJ23gIi0vYxow&usqp=CAU"  id="img-2" alt="image"/>
       <div class="card-body">
         <h5>JEAN SHIRT</h5>
         <p>RS-550</p>
         <button>Add to cart</button>
       </div>
     </div>

     <div class="card">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQggxiUCrAr-eKG93gK548fWmkAd267UgFfYg&usqp=CAU"  img="img-3" alt="image"/>
       <div class="card-body">
         <h5>SPORT SHOE</h5>
         <p>RS-1099</p>
         <button>Add to cart</button>
       </div>
     </div>

     <div class="card">
       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ4QpXS-6XTTniPYBYIXRtvKh0GNu57ydR1dixOJVN_GwtQj8_xXszNoAo4QJ93txd-Sw&usqp=CAU"  id='img-4' alt="image"/>
       <div class="card-body">
         <h5>EAR-BUDS</h5>
         <p>RS- 750</p>
         <button>Add to cart</button>
       </div>
     </div>

 </div>
 )
}

export default App
