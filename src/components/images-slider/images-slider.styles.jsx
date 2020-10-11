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


export const ButtonWrap = styled.div`
  width: 100%;
  margin: auto;
  bottom: 6px;
  position: absolute;

  @media (max-width: 1485px) {
    bottom: 3px;
  }
`;

export const ButtonWrapeer = styled.div`
  width: 12%;
  margin: auto;
  display: none;

  ${ImagesWrap}: hover & {
    display: block;
  }

  
  @media (max-width: 1485px) {
    bottom: 14%;
  }

  @media (max-width: 1485px) {
    width: 20%;
  }

  @media (max-width: 895px) {
    width: 30%;
  }

  @media (max-width: 500px) {
    width: 40%;
  }

  @media (max-width: 500px) {
    width: 50%;
  }

`;
