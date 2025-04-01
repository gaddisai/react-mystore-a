import React from 'react'
import { useContext } from 'react'
import { appContext } from '../App'
import './Cart.css'
function Cart() {
  const { cart, products,setCart } = useContext(appContext);
  const increment = (key) => {
    setCart({...cart,[key]:cart[key]+1});
  }
  const decrement = (key) => {
    if(cart[key] > 1){
      setCart({...cart,[key]:cart[key]-1});
    }else{
      delete cart[key];
      setCart({...cart});
    }
  }
  return (
    <>
    <div>
      <h2>Cart</h2>
      <div className='cartContent' >
        { 
          Object.keys(cart).length === 0 ? (
            <h3>Cart is empty</h3>
          ) : (
            Object.keys(cart).map((key) => {
              const product = products.find((product) => product.id === parseInt(key));
              return (
                <div key={key}>
                  <h3>{product.id}-{product.name}-{product.price} <button onClick={()=>decrement(key)}>-</button>{cart[key]}<button onClick={()=>increment(key)}>+</button></h3>
                </div>
              );
            })
          )
        }
      </div>
    </div>
    </>
  )
}
export { Cart };
