import React from 'react'
import { useContext } from 'react'
import { appContext } from '../App'

function Cart() {
  const { cart, products,setCart } = useContext(appContext);
  return (
    <>
    <div>
      <h2>Cart</h2>
      <div className='App_Products_Row'>
        {
          Object.keys(cart).length === 0 ?
          <h3>Cart is empty</h3>:
          Object.keys(cart).map((value,index)=>(
            <div key={index} className="App_Products_Box">
              <h3>{products[value-1].name}</h3>
              <br />
              <p>Price: {products[value-1].price}</p>
              <button onClick={()=>setCart({...cart,[value]:undefined})}>Remove from Cart</button>
            </div>
          ))
        }
      </div>
    </div>
    </>
  )
}
