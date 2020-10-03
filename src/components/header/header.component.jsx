import React from "react";
import ButtonMenu from "../menu-button/menu-button.component";
import {
  HeaderContainer,
  LogoWrap,
  MenuWrap,
  MenuUl,
  MenuLI,
  MenuLink,
  Logo,
  CartItems, ProductName
} from "./header.styles";
import LogoImage from "../../assets/logo.png";
import ShopIcon from "../shop-icon/shop-icon.component";

const Header = () => (
  <HeaderContainer>
    <LogoWrap>
        <ProductName>BOCADOS</ProductName>
    </LogoWrap>
    <MenuWrap>
      <ButtonMenu />
      <MenuUl>
        <MenuLI>
          <MenuLink href="Home">Home</MenuLink>
        </MenuLI>
        <MenuLI>
          <MenuLink>Shop</MenuLink>
        </MenuLI>
        <MenuLI>
          <MenuLink>Contact</MenuLink>
        </MenuLI>
        <MenuLI>
          <MenuLink>About</MenuLink>
        </MenuLI>
        <MenuLI>
          <MenuLink>
            <ShopIcon color='black' />
            <CartItems>[0]</CartItems>
          </MenuLink>
        </MenuLI>
      </MenuUl>
    </MenuWrap>
  </HeaderContainer>
);

export default Header;
