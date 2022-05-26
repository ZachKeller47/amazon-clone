import React from 'react'
import './checkoutProduct.css'
import { useStateValue } from './StateProvider';

function CheckoutProduct({ id, title, image, price, rating}) {
    const [{ basket }, dispatch] = useStateValue();

    const removeFromCart = () => {
        // remove item from cart
        dispatch({
            type: 'REMOVE_FROM_CART',
            id: id,
        });
    }

    return (
    <div className="checkoutProduct">
        <img src={image} alt="" className="checkoutProduct__image"/>

        <div className='checkoutProduct__info'>
                <p className='checkoutProduct__title'>{title}</p>
                <p className="checkoutProduct__price">
                    <small>$</small>
                    <strong>{price}</strong>
                </p>
                <div className="checkoutProduct__rating">
                    {Array(rating)
                    .fill()
                    .map((_, i) => (
                        <p>🌟</p>
                    ))}
                </div>
            <button onClick={removeFromCart}>Remove From Cart</button>
        </div>
    </div>
  )
}

export default CheckoutProduct