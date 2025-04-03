import './Products.css';
import { useContext } from 'react';
import { appContext } from '../App';
function Products() {
    const { user,products,cart, setCart}= useContext(appContext);
    const addToCart = (id) => {
        setCart({...cart,[id]:1});
    }
    return (
        <div className="App_Products_Container">
            <h2>Welcome {user.name}</h2>
            <div className="App_Products_Row">
                {
                    products.map((value) => (
                        <div key={value.id} className="App_Products_Box">
                            <h3>{value.name}</h3>
                            <br />
                            <p>Price: {value.price}</p>
                            <button onClick={()=>addToCart(value.id)}>Add to Cart</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export { Products };