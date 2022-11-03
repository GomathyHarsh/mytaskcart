
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Card from './Card.js';
import Cart from './Cart.js';
import { useState } from 'react';
  



function App() {
  const [products,setProducts] =useState( [
    {
      image:"https://thumbnail.imgbin.com/18/19/17/mobile-phone-case-mobile-phone-gadget-communication-device-mobile-phone-accessories-pSKqVQEm_t.jpg",
      name:"IPhone",
      Price: 100000,
      ratings:4.5,
      id:1
    },
    {
      image:"https://fdn2.gsmarena.com/vv/pics/apple/apple-ipad-97-2018-1.jpg",
      name:"IPad",
      Price: 50000,
      ratings:4.7,
      id:2
    },
    {
      image:"https://m-cdn.phonearena.com/images/phones/69061-350/Motorola-Moto-X4.jpg",
      name:"One plus",
      Price: 80000,
      ratings:4.3,
      id:3
    },
    {
      image:"https://m.media-amazon.com/images/I/81i1A1MgXBL._SX679_.jpg",
      name:"Samung Glaxy",
      Price: 30000,
      ratings:4.7,
      id:4
    },
    {
      image:"https://media.croma.com/image/upload/v1642580441/Croma%20Assets/Computers%20Peripherals/Tablets%20and%20iPads/Images/247597_12_e5x40i.png",
      name:"Samsung Tab",
      Price: 100000,
      ratings:4.2,
      id:5
    },
    {
      image:"https://www.nextstepreborn.co.th/wp-content/uploads/2022/04/cover-Macbook-Pro-13.3-2017.png",
      name:"Mac NoteBook",
      Price: 100000,
      ratings:4.8,
      id:6
    },
    {
    image:"https://static.digit.in/default/thumb_93311_default_td_480x480.jpeg?tr=w-1200",
      name:"Moto Fusion",
      Price: 20000,
      ratings:4.5,
      id:7
    },
    {
      image:"https://m.media-amazon.com/images/I/719Tou0fQnL._SL1500_.jpg",
      name:"Apple Tab",
      Price: 100000,
      ratings:4.2,
      id:8
    },
    {
      image:"https://m.media-amazon.com/images/I/81RnJChQHSL._SL1500_.jpg",
      name:"OPPO",
      Price: 30000,
      ratings:3.9,
      id:9
    }
  ])
  const [cartItems,setCartItems]=useState([])
  let addToCart=(product) =>{
     setCartItems([...cartItems,product])
  }
   
  let removeFromCart = (product) =>{
    const indexVal= cartItems.findIndex(obj => obj.id === product.id);
    cartItems.splice(indexVal,1);
    setCartItems([...cartItems])

  }
  return (
    <div className="container">
      <header class="bg-dark py-5">
            <div class="container px-4 px-lg-5 my-5">
                <div class="text-center text-white">
                    <h1 class="display-4 fw-bolder">Harsh Tech Shop</h1>
                    <p class="lead fw-normal text-white-50 mb-0">Easy Buy</p>
                </div>
            </div>
        </header>
      <div className="row">
        <div className="col-lg-8">
          <div className="row">
            {
              products.map((product)=>{
                return <Card product={product} addToCart={addToCart} cartItems={cartItems}/>
              })
            }
            </div>
            

            
          </div>

        
        <div className="col-lg-4">
          <h3>Cart</h3>
         <Cart cartItems={cartItems} removeFromCart={removeFromCart}/>
        </div>

      </div>
      
    </div>
  );
}

export default App;
