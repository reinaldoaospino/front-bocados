import styled from "styled-components";

export const CheckInContainer = styled.div`
  margin-top: 150px;
  text-align: center;
`;
export const ItemWrap = styled.div``;

export const Title = styled.span`}
font-size: 2.5em;
font-family: 'Cabin';
`;

export const CustomSpan = styled.span``;

export const ButtonContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;
  @media (max-width: 680px) {
    display:block 
  }

`;

export const ButtonWrap = styled.div`
  width: 100%;
  margin: 40px auto;
  grid-column: 5 / span 2;
  @media (max-width: 680px) {
    width:50%;
  }
`;
