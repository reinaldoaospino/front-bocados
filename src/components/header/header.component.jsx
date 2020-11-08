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
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {selectCartItemsCount} from '../../redux/cart/cart.selectors'
import { createStructuredSelector } from "reselect";
const LinkStyles = {
  textDecoration: "none",
};

const Header = ({itemCount}) => (
  <HeaderContainer>
    <MobileCard>
      <ShopIcon color="black" />
      <CartItems>{`[${itemCount}]`}</CartItems>
    </MobileCard>
    <LogoWrap>
      <Link to="/front-bocados">
        <Logo ImageUrl={LogoHeader} />
      </Link>
    </LogoWrap>
    <MenuWrap>
      <ButtonMenu />
      <MenuUl>
        <MenuLI>
          <Link style={LinkStyles} to="/front-bocados">
            <LinkOption>Home</LinkOption>
          </Link>
        </MenuLI>
        <MenuLI>
          <Link style={LinkStyles} to="/front-bocados/shop">
            <LinkOption>Shop</LinkOption>
          </Link>
        </MenuLI>
        <MenuLI>
          <Link style={LinkStyles} to="/front-bocados/contact">
            <LinkOption>Contact</LinkOption>
          </Link>
        </MenuLI>
        <MenuLI>
          <Link style={LinkStyles} to="/front-bocados/about">
            <LinkOption>About</LinkOption>
          </Link>
        </MenuLI>
        <MenuLI>
          <LinkOption>
            <ShopIcon color="black" />
            <CartItems>{`[${itemCount}]`}</CartItems>
          </LinkOption>
        </MenuLI>
      </MenuUl>
    </MenuWrap>
  </HeaderContainer>
);

const mapStateToProps = createStructuredSelector({
  itemCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(Header);
