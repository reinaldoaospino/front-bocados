import styled from "styled-components";

export const HomeContainer = styled.div``;

export const AwardContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  margin-top: 80px;
  margin-bottom: 80px;

  @media (max-width: 550px){
    grid-template-columns: 1fr 1fr;
    grid-gap: 44px;
  }
`;

export const ContentContainer = styled.div`
max-width: 1000px;
margin: auto;
background: white;

`;
