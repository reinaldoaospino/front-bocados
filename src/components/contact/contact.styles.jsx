import styled from "styled-components";

export const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const InputWrapped = styled.div`
  margin-bottom: 10px;
  background: white;
  @media (max-width: 1038px) {
    width: 90%;
  }

  @media (max-width: 880px) {
    width: 100%;
  }
`;

export const ButtonWrapped = styled.div`
  margin-bottom: 10px;
  @media (max-width: 1038px) {
    width: 90%;
  }

  @media (max-width: 880px) {
    width: 100%;
  }
`;
