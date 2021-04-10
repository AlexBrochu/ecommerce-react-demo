import React from "react";
import { useDispatch, useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { State } from "../../redux/store";

import "./checkout.styles.scss";

const CheckoutPage = () => {
  const state = useSelector((state: State) => state);
  const dispatch = useDispatch();
  const total = selectCartTotal(state);
  const cartItems = selectCartItems(state);

  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="checkout-block">
          <span>Product</span>
        </div>
        <div className="checkout-block">
          <span>Description</span>
        </div>
        <div className="checkout-block">
          <span>Quantity</span>
        </div>
        <div className="checkout-block">
          <span>Price</span>
        </div>
        <div className="checkout-block">
          <span>Remove</span>
        </div>
      </div>
      {cartItems.map((cartItem: any) => (
        <CheckoutItem item={cartItem}></CheckoutItem>
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
    </div>
  );
};

export default CheckoutPage;
