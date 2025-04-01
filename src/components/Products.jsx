import './Products.css';
import { useContext } from 'react';
import { appContext } from '../App';

function Products() {
    const { user }= useContext(appContext);
    const products = [
        { id: 1, name: 'Product 1', price: 100 },
        { id: 2, name: 'Product 2', price: 200 },
        { id: 3, name: 'Product 3', price: 300 },
        { id: 4, name: 'Product 4', price: 400 },
        { id: 5, name: 'Product 5', price: 400 },
        { id: 6, name: 'Product 6', price: 400 },
    ];

    return (
        <div className="App_Products_Container">
            <h2>Welcome {user.name}</h2>
            <div className="App_Products_Row">
                {
                    products.map((value, index) => (
                        <div key={value.id} className="App_Products_Box">
                            <h3>{value.name}</h3>
                            <br />
                            <p>Price: {value.price}</p>
                            <button>Add to Cart</button>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export { Products };