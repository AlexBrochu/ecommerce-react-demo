import React from "react";
import { CartItemType } from "../../types/common.types";

import "./cart-item.styles.scss";
interface CartItemProp {
  item: CartItemType;
}

const CartItem = ({ item }: CartItemProp) => {
  return (
    <div className="cart-item">
      <img src={item.imageUrl} alt="item" />
      <div className="item-details">
        <span className="name">{item.name}</span>
        <span className="price">
          {item.quantity} x ${item.price}
        </span>
      </div>
    </div>
  );
};

export default CartItem;
