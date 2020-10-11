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
} from "./header.styles";
import LogoHeader from "../../assets/logoHeader.svg";
import ShopIcon from "../shop-icon/shop-icon.component";
import { Link } from "react-router-dom";

const LinkStyles = {
  textDecoration: "none",
};

const Header = () => (
  <HeaderContainer>
    <LogoWrap>
      <Logo ImageUrl={LogoHeader} />
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
          <Link style={LinkStyles}>
            <LinkOption>Contact</LinkOption>
          </Link>
        </MenuLI>
        <MenuLI>
          <Link style={LinkStyles}>
            <LinkOption>About</LinkOption>
          </Link>
        </MenuLI>
        <MenuLI>
          <LinkOption>
            <ShopIcon color="black" />
            <CartItems>[0]</CartItems>
          </LinkOption>
        </MenuLI>
      </MenuUl>
    </MenuWrap>
  </HeaderContainer>
);

export default Header;