import styled from "styled-components";

export const AboutPageContainer = styled.div`
  background: #f7f6f2;
`;

export const AboutWrapped = styled.div`
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 60px;
  padding: 99px 0px;

  @media (max-width: 916px) {
    grid-template-columns: 1fr;
  }
`;
export const AboutImage = styled.img`
  height: 450px;
  background-color: #d9c39a;
  @media (max-width: 1054px) {
    margin-left: 10px
  }
  @media (max-width: 916px) {
     width: 50%; 
    margin: auto;
  }

}
`;
