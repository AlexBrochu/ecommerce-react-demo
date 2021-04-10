import React, { useMemo } from "react";
import CartItem from "../cart-item/cart-item.component";
import { useSelector, useDispatch } from "react-redux";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";
import { State } from "../../redux/store";

const CartDropdown = () => {
  const cartItems = useSelector((state: State) => state.cart.cartItems);
  const items = useMemo(() => cartItems, [cartItems]);

  console.log("render");
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {items.map((cartItem: any) => (
          <CartItem key={cartItem.id} item={cartItem}></CartItem>
        ))}
      </div>
      <CustomButton>GO TO CHECKOUT</CustomButton>
    </div>
  );
};

export default CartDropdown;
