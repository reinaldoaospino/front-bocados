import React from "react";
import ButtonMenu from "../menu-button/menu-button.component";
import {
  HeaderContainer,
  LogoWrap,
  MenuWrap,
  MenuUl,
  MenuLI,
  MenuLink,
  Logo
} from "./header.styles";
import LogoImage from "../../assets/logo.png";

const Header = () => (
  <HeaderContainer>
    <LogoWrap>
      <Logo ImageUrl={LogoImage} />
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
      </MenuUl>
    </MenuWrap>
  </HeaderContainer>
);

export default Header;
