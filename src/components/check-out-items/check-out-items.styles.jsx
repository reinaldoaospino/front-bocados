import styled from "styled-components";

export const CheckInItemsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 50px;
  margin-top: 53px;
  box-shadow: 1px 10px 4px 0px rgba(207,190,190,0.75);

  @media (max-width: 810px) {
    display: none;
  }
`;

export const ItemWrap = styled.div`
  align-self: center;
`;

export const CustomSpan = styled.span``;

export const ItemImg = styled.img`
  height: 123px;
  width: 139px;
`;
