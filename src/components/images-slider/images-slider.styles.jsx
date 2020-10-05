import styled from "styled-components";

export const ImagesWrap = styled.div`
  height: 100%;
`;

export const Imagen1 = styled.div`
  background-image: url(${(props) => props.ImageUrl});
  height: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  background-position: center;

`;

export const Title1Wrap = styled.div`
  position: absolute;
  display: grid;
  text-align: center;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-content: center;
  grid-template-rows: 62% 10% 8%;
`;

export const Title1 = styled.h1`
  font-family: "Amatic SC", cursive;
  font-size: 5em;
  color: white;
  font-weight: 400;
  @media (max-width: 900px) {
    font-size: 4.5em;
  }

  @media (max-width: 800px) {
    font-size: 3.5em;
  }

  @media (max-width: 600px) {
    font-size: 3em;
  }
`;

export const SubTitle1 = styled.h3`
  font-size: 1.5em;
  font-weight: 500;
  color: white;

  @media (max-width: 600px) {
    font-size: 1em;
  }
`;

export const ButtonWrap = styled.div`
  width: 100%;
  margin: auto;
  bottom: 6px;
  position: absolute;
`;

export const ButtonWrapeer = styled.div`
  width: 12%;
  margin: auto;
  display: none;

  ${ImagesWrap}: hover & {
    display: block;
  }
`;
