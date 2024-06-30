import React, { useContext } from 'react';
import "./Product.css";
import ShoppingContext from '../context/shopping/shoppingContext';

const Product = ({ id, image, title, price, rating }) => {
  const shoppingContext = useContext(ShoppingContext);
  const { addToBasket } = shoppingContext;

  const addToBasketHadler = () => {
    addToBasket({ item: { id, image, title, price, rating } });
  }
  return (
    <div className="product" key={id}>
      <img src={image} alt="" />
      <div className="product-info">
        <p className="product-price"><small>$</small>{price}.99</p>
        <p>{title} </p>
        <div className="product-rating">
          {Array(rating).fill().map((_, i) => (<p key={i}>⭐</p>))}
        </div>
      </div>
      <button className="product-btn" onClick={addToBasketHadler}>Add to Basket</button>
    </div>
  );
}

export default Product;
