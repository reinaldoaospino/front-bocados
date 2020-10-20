import styled from "styled-components";

export const ContactPageContainer = styled.div`
  background: #f7f6f2;
`;

export const ContactPageWrapped = styled.div`
  max-width: 1000px;
  margin: auto;
  display: grid;
  grid-template-columns: 50% 50%;
  padding: 99px 0px;

  @media (max-width: 880px) {
    grid-template-columns: 100%;
    grid-gap: 30px;
  }
`;

export const ContactImg = styled.img`
  height: 374px;

  @media (max-width: 1038px) {
    height: 364px;
    margin-left: 20px;
  }
  @media (max-width: 880px) {
    width: 50%;
    margin: auto;
  }

  @media (max-width: 695px) {
    width: 70%;
  }
  @media (max-width: 512px) {
    width: 80%;
  }
  @media (max-width: 387px) {
    width: 95%;
  }
`;

export const ContactWrapped = styled.div`
  @media (max-width: 880px) {
    margin: auto;
    width: 50%;
  }
  @media (max-width: 695px) {
    width: 70%;
  }

  @media (max-width: 512px) {
    width: 80%;
  }

  @media (max-width: 387px) {
    width: 95%;
  }
`;
