import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  grid-template-columns: 50% 50%;
  align-items: center;
  text-align: center;
  color: black;
`;

export const LogoWrap = styled.div``;

export const Logo = styled.div`
  background-image: url(${props => props.ImageUrl});
  height: 103px;
  width: 134px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: center;
  margin: auto;
  background-color: #D9C39A;
  border-radius: 46%;
  margin-top: 5px;
  margin-bottom: 5px;
`;
export const MenuWrap = styled.div``;

export const MenuUl = styled.ul`
  display: grid;
  grid-template-columns: 13% 13% 16% 13% 10%;
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
font-family: 'Crimson Text', serif;
text-transform: uppercase;
  text-decoration: none;
`;

export const CartItems = styled.span`
`

export const ProductName = styled.span`
font-family: 'Sansita Swashed', cursive;
font-size: 2.5em;
`