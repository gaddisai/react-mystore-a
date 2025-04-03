import React from 'react'
import './Orders.css'
import { useContext } from 'react'
import { appContext } from '../App'
function Orders() {
    const {orders,products} = useContext(appContext);
        return (
            <>
                <h2>My Orders</h2>
                {Object.keys(orders).length === 0 ? (
                    <h3>No Orders</h3>
                ) : (
                    Object.keys(orders).map((key) => {
                        const product = products.find((product) => product.id === parseInt(key));
                        return (
                            <div key={key}>
                                <ul>
                                    <li>ID: {product.id}
                                    <br/>NAME: {product.name}
                                    <br/>PRICE: {product.price}
                                    <br/>DATE: {Date()}
                                    <br/>QUANTITY_PRICE: {orders[key] * product.price}</li>
                                </ul>
                            </div>
                        );
                    })
                )}
            </>
        );
}
export { Orders }
