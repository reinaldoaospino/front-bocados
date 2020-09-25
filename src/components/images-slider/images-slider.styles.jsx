import styled from "styled-components";

export const ImagesWrap = styled.div`
  height: 700px;
`;

export const Imagen1 = styled.div`
  background-image: url(${props=>props.ImageUrl});
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
`;

export const SubTitle1 = styled.h3`
  font-size: 1.5em;
  font-weight: 500;
  color: white;
`;

export const ButtonWrap = styled.div`
  width: 70%;
  margin: auto;
`;
