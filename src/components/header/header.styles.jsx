import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  text-align: center;
  color: black;
`;

export const LogoWrap = styled.div``;

export const LogoName = styled.a`

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

  list-style: none;
`;

export const MenuLink = styled.a`

  text-decoration: none;
`;
