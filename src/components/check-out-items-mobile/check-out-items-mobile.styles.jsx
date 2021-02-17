import styled from "styled-components";

export const CheckItemsMobileWrap = styled.div`
  display: none;
  box-shadow: 1px 10px 4px 0px rgba(207,190,190,0.75);
  @media (max-width: 810px) {
    display: grid;
    grid-template-columns: 26% 37% 33%;
    margin-top: 53px;
  }
`;

export const ItemMobileWrap = styled.div`
align-self: center;
`;

export const ItemDetailsWrap = styled.div`
`;

export const ItemDetail = styled.div`
text-align: initial;
margin-left: 10px;
font-size: 12px;
margin-top: 6px;
`;

export const ItemImgMobile = styled.img`
height: 110px;
width: 124px;
`