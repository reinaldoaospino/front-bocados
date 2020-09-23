import styled from "styled-components";

export const HeaderContainer = styled.div`
  background-color: blue;
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  text-align: center;
`;

export const LogoWrap = styled.div``;

export const LogoName = styled.a`
  color: white;
`;

export const MenuWrap = styled.div``;

export const MenuUl = styled.ul`
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  display: grid;
  grid-template-columns: 20% 20% 20% 20%;
  justify-items: end;

  @media (max-width: 850px) {
    display: none;
  }
`;

export const MenuLI = styled.li`
  color: white;
  list-style: none;
`;

export const MenuLink = styled.a`
  color: white;
  text-decoration: none;
`;
