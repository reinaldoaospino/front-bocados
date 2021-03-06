import styled from "styled-components";

export const HeaderContainer = styled.div`
  display: grid;
  position: fixed;
  top: 0px;
  background-color: white;
  width: 100%;
  z-index: 99;
  grid-template-columns: 50% 50%;
  align-items: center;
  text-align: center;
  color: black;
  box-shadow: 0px 10px 5px -5px rgba(242, 242, 242, 1);

  @media (max-width: 916px) {
    grid-template-columns: 20% 60% 20%;
  }
  @media (max-width: 399px) {
    grid-template-columns: 16% 57% 31%;
  }

  @media (max-width: 290px) {
    grid-template-columns: 9% 45% 69%;
  }
`;

export const LogoWrap = styled.div``;

export const Logo = styled.div`
  background-image: url(${(props) => props.ImageUrl});
  height: 70px;
  width: 270px;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: center;
  margin: auto;
`;
export const MenuWrap = styled.div``;

export const MenuUl = styled.ul`
  display: grid;
  grid-template-columns: 13% 13% 16% 13% 10%;
  justify-items: end;

  @media (max-width: 1434px) {
    grid-template-columns: 13% 14% 19% 16% 10%;
  }

  @media (max-width: 1236px) {
    grid-template-columns: 13% 16% 21% 18% 15%;
  }

  @media (max-width: 1056px) {
    grid-template-columns: 12% 16% 25% 18% 15%;
  }
  @media (max-width: 916px) {
    display: none;
  }
`;

export const MenuLI = styled.li`
  list-style: none;
`;

export const LinkOption = styled.div`
  text-decoration: none;
  font-family: "Crimson Text", serif;
  text-transform: uppercase;
  text-decoration: none;
  font-size: 1.2em;
  color: black;
`;

export const CartItems = styled.span`
cursor: pointer;
`;

export const ProductName = styled.span`
  font-family: "Sansita Swashed", cursive;
  font-size: 2.5em;
`;

export const MobileCard = styled.div`
  display: none; 
  @media (max-width: 916px) {
    display: block;
  }
 
}
`;
