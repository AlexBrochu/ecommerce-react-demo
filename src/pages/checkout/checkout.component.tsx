import React from "react";
import { useSelector } from "react-redux";
import CheckoutItem from "../../components/checkout-item/checkout-item.component";
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component";
import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { State } from "../../redux/store";
import { CartItemType } from "../../types/common.types";

import "./checkout.styles.scss";

const CheckoutPage = () => {
  const state = useSelector((state: State) => state);
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
      {cartItems.map((cartItem: CartItemType) => (
        <CheckoutItem item={cartItem}></CheckoutItem>
      ))}
      <div className="total">
        <span>TOTAL: ${total}</span>
      </div>
      <div className="test-warning">
        *Please use the following test credit card for payments*
        <br />
        4242 4242 4242 4242 - Exp: 01/
        {new Date().getFullYear().toString().substring(2)} - CVV: 123
      </div>
      <StripeCheckoutButton price={total}></StripeCheckoutButton>
    </div>
  );
};

export default CheckoutPage;
