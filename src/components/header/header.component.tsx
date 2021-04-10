import React, { useMemo } from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { useSelector } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import "./header.styles.scss";
import { State } from "../../redux/store";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

const Header = () => {
  const user = useSelector((state: State) => state.user);
  const cart = useSelector((state: State) => state.cart);

  const currentUser = useMemo(() => user.currentUser, [user.currentUser]);
  const hidden = useMemo(() => cart.hidden, [cart.hidden]);

  return (
    <div className="header">
      <Link className="logo-container" to="/">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="option" to="/shop">
          SHOP
        </Link>
        <Link className="option" to="/contact">
          CONTACT
        </Link>
        {currentUser ? (
          <div className="option" onClick={() => auth.signOut()}>
            SIGN OUT
          </div>
        ) : (
          <Link className="option" to="/signIn">
            SIGN IN
          </Link>
        )}
        <CartIcon />
      </div>
      {hidden ? null : <CartDropdown />}
    </div>
  );
};

export default Header;
