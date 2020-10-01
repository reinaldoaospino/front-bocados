import styled from "styled-components";

export const SugarFreeContainer = styled.div`
  display: grid;
  grid-gap: 10px;
  justify-self: center;
`;

export const IconWrapped = styled.div`
  background-color: ${(props) => props.color};
  border-radius: 50%;
  width: 100px;
  height: 100px;
  text-align: center;
  &:hover {
    background-color: green;
  }
`;

export const DescriptionWrapped = styled.div`
  text-align: center;
`;

export const Description = styled.span`
  font-size: 15px;
  text-transform: uppercase;
  font-weight: bolder;
  font-family: "Poppins", Arial, sans-serif;
  color: #000000;
`;

export const Line = styled.br``