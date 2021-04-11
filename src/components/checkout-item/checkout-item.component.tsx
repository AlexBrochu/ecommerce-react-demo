import React from "react";
import { useDispatch } from "react-redux";
import { addItem, clearItem, removeItem } from "../../redux/cart/cart.action";

import "./checkout-item.styles.scss";

const CheckoutItem = ({ item }: any) => {
  const dispatch = useDispatch();

  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="item" src={item.imageUrl} />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <div className="arrow" onClick={() => dispatch(removeItem(item))}>
          &#10094;
        </div>
        <span className="value">{item.quantity}</span>
        <div className="arrow" onClick={() => dispatch(addItem(item))}>
          &#10095;
        </div>
      </span>
      <span className="price">{item.price}</span>
      <span className="remove-button" onClick={() => dispatch(clearItem(item))}>
        &#10005;
      </span>
    </div>
  );
};

export default CheckoutItem;
