import React from "react";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }: any) => {
  console.log(item);
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={item.imageUrl} />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">{item.quantity}</span>
      <span className="price">{item.price}</span>
      <span className="remove-button">&#10005;</span>
    </div>
  );
};

export default CheckoutItem;
