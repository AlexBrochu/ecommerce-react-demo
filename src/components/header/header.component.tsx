import React, { useMemo } from "react";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { useSelector } from "react-redux";

import { auth } from "../../firebase/firebase.utils";

import { State } from "../../redux/store";
import CartIcon from "../cart-icon/cart-icon.component";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";

import {
  HeaderContainer,
  LogoContainer,
  OptionLink,
  OptionsContainer,
} from "./header.styles";

const Header = () => {
  const user = useSelector((state: State) => state.user);
  const cart = useSelector((state: State) => state.cart);

  const currentUser = useMemo(() => user.currentUser, [user.currentUser]);
  const hidden = useMemo(() => cart.hidden, [cart.hidden]);

  return (
    <HeaderContainer>
      <LogoContainer to="/">
        <Logo className="logo"></Logo>
      </LogoContainer>
      <OptionsContainer>
        <OptionLink to="/shop">SHOP</OptionLink>
        <OptionLink to="/contact">CONTACT</OptionLink>
        {currentUser ? (
          <OptionLink as="div" onClick={() => auth.signOut()}>
            SIGN OUT
          </OptionLink>
        ) : (
          <OptionLink to="/signIn">SIGN IN</OptionLink>
        )}
        <CartIcon />
      </OptionsContainer>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

export default Header;
