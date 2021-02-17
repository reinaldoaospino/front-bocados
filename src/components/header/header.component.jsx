import React from "react";
import ButtonMenu from "../menu-button/menu-button.component";
import {
  HeaderContainer,
  LogoWrap,
  MenuWrap,
  MenuUl,
  MenuLI,
  LinkOption,
  Logo,
  CartItems,
  MobileCard,
} from "./header.styles";
import LogoHeader from "../../assets/logoHeader.svg";
import ShopIcon from "../shop-icon/shop-icon.component";
import { Link, useHistory } from "react-router-dom";
import { connect } from "react-redux";
import {
  selectCartHidden,
  selectCartItemsCount,
} from "../../redux/cart/cart.selectors";
import { createStructuredSelector } from "reselect";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { toggleCartHidden } from "../../redux/cart/cart.action";

const LinkStyles = {
  textDecoration: "none",
};

const Header = ({ itemCount, hidden, toggleCartHidden }) => {
  const history = useHistory();

  const logoClick = () => {
    if (history.location.pathname === "/") {
      window.scrollTo(0, 0);
      return;
    }

    history.push("/");
  };
  return (
    <HeaderContainer>
      <MobileCard onClick={() => toggleCartHidden()}>
        <ShopIcon color="black" />
        <CartItems>{`[${itemCount}]`}</CartItems>
      </MobileCard>
      <LogoWrap>
        <Link onClick={() => logoClick()}>
          <Logo ImageUrl={LogoHeader} />
        </Link>
      </LogoWrap>
      <MenuWrap>
        <ButtonMenu />
        <MenuUl>
          <MenuLI>
            <Link style={LinkStyles} to="/">
              <LinkOption>Home</LinkOption>
            </Link>
          </MenuLI>
          <MenuLI>
            <Link style={LinkStyles} to="/shop">
              <LinkOption>Shop</LinkOption>
            </Link>
          </MenuLI>
          <MenuLI>
            <Link style={LinkStyles} to="/contact">
              <LinkOption>Contact</LinkOption>
            </Link>
          </MenuLI>
          <MenuLI>
            <Link style={LinkStyles} to="/about">
              <LinkOption>About</LinkOption>
            </Link>
          </MenuLI>
          <MenuLI>
            <LinkOption onClick={() => toggleCartHidden()}>
              <ShopIcon color="black" />
              <CartItems>{`[${itemCount}]`}</CartItems>
            </LinkOption>
          </MenuLI>
        </MenuUl>
      </MenuWrap>
      {hidden ? null : <CartDropdown />}
    </HeaderContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
  hidden: selectCartHidden,
});

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
