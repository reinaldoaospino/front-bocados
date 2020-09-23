import React from "react";
import ButtonMenu from "../menu-button/menu-button.component";
import {
  HeaderContainer,
  LogoWrap,
  LogoName,
  MenuWrap,
  MenuUl,
  MenuLI,
  MenuLink,
} from "./header.styles";

const Header = () => (
  <HeaderContainer>
    <LogoWrap>
      <LogoName>Bocados</LogoName>
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
