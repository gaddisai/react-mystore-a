import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { appContext } from '../App'
import './Cart.css'
function Cart() {
  const { cart, user,products,setCart,setOrders } = useContext(appContext);
  const navigate=useNavigate();
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
  const handleDelete = (key) => {
    delete cart[key];
    setCart({...cart});
  }
  const totalPrice = Object.keys(cart).reduce((total,key)=>{
    const product = products.find((product) => product.id === parseInt(key));
    return total + (cart[key] * product.price);
  },0);
  const handlePlaceOrder = () => {
    setOrders(cart)
    setCart({});
    navigate('/orders');
  }

  return (
    <>
    <div>
      <h2>My Cart</h2>
      <div className='cartContent' >
        { 
          Object.keys(cart).length === 0 ? (
            <h3>Cart is empty</h3>
          ) : (
            Object.keys(cart).map((key) => {
              const product = products.find((product) => product.id === parseInt(key));
              return (
                <div key={key}>
                  <h3>ID: {product.id} 
                    NAME:{product.name}
                    PRICE: {product.price} <button onClick={()=>decrement(key)}>-</button>{cart[key]}<button onClick={()=>increment(key)}>+</button>
                    QUANTITY_PRICE:{cart[key]*product.price}
                    <button onClick={()=>{handleDelete(key)}}>Remove</button>  
                  </h3>
                </div>
              );
            })
          )
        }
        {Object.keys(cart).length > 0 && (
          <h3>Total Price: {totalPrice}</h3>
        )}
        {user.email ? (<button className="PlaceOrder" onClick={handlePlaceOrder}>Place Order</button>):
        (<button onClick={()=>navigate("/login")}>Login</button>)}
        
      </div>
    </div>
    </>
  )
}
export { Cart };
