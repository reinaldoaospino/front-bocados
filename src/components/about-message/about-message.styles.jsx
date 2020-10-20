import styled from "styled-components";

export const AboutMessageContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (max-width: 1054px) {
    margin-right: 10px;
  }

  @media (max-width: 916px) {
    text-align: center;
  }
`;

export const AboutTitle = styled.h1``;

export const AboutParagraph = styled.p`
  font-size: 15px;
  line-height: 1.8;
  color: gray;
`;
