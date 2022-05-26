import React from 'react';
import './product.css';
import { useStateValue } from './StateProvider';

function Product({ id, title, image, price, rating }) {

  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
// add item to cart
    dispatch ({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    });
};

  return (
    <div className="product">
        <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
            <small>$</small>
            <strong>{price}</strong>
        </p>
        <div className="product__rating">
            {Array(rating)
            .fill()
            .map((_, i) => (
            <p>⭐</p>
            ))}
        </div>
    </div>
        <img src={image} alt="product" />
        <button onClick={addToBasket}>Add to cart</button>
    </div>
  );
}

export default Product