import styled from "styled-components";

export const CheckInItemsWrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  grid-gap: 50px;
  margin-top: 53px;

  @media (max-width: 680px) {
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
