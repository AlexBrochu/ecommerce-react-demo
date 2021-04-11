import React, { useMemo } from "react";
import CartItem from "../cart-item/cart-item.component";
import { useSelector, useDispatch } from "react-redux";
import { RouteComponentProps, withRouter } from "react-router-dom";

import CustomButton from "../custom-button/custom-button.component";

import "./cart-dropdown.styles.scss";
import { State } from "../../redux/store";
import { toggleCartHidden } from "../../redux/cart/cart.action";
import { CartItemType } from "../../types/common.types";

const CartDropdown = (props: RouteComponentProps) => {
  const cartItems = useSelector((state: State) => state.cart.cartItems);
  const items = useMemo(() => cartItems, [cartItems]);
  const dispatch = useDispatch();

  console.log("render");
  return (
    <div className="cart-dropdown">
      <div className="cart-items">
        {cartItems.length ? (
          items.map((cartItem: CartItemType) => (
            <CartItem key={cartItem.id} item={cartItem}></CartItem>
          ))
        ) : (
          <span className="empty-message">Your cart is empty</span>
        )}
      </div>
      <CustomButton
        onClick={() => {
          props.history.push("/checkout");
          dispatch(toggleCartHidden());
        }}
      >
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

export default withRouter(CartDropdown);
