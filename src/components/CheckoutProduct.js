import React, { useContext } from 'react';
import ShoppingContext from '../context/shopping/shoppingContext';
import "./CheckoutProduct.css";

const CheckoutProduct = ({ id, image, title, rating, price, hideButton }) => {

  const shoppingContext = useContext(ShoppingContext);
  const { removeFromBasket } = shoppingContext;

  const removeFromBasketHandler = () => {
    removeFromBasket({ id: id });
  };

  return (
    <div className="checkout-product" key={id}>
      <img className="checkout-product-image" src={image} alt=""/>
      <div className="checkout-product-info">
        <p className="checkout-product-price">
          <small>$</small>
          <strong>{price}</strong>
          .99</p>
        <p className="checkout-product-title">{title}</p>
          <div className="checkout-product-rating">	
          {Array(rating).fill()
            .map((_, i) => (<p key={i}>⭐</p>))} 
        </div>
          {!hideButton && <button onClick={removeFromBasketHandler}>Remove from Basket</button>}
      </div>
    </div>
  )
}

export default CheckoutProduct;
