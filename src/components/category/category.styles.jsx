import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 10% 10% 10% 10%;
  margin-top: 200px; //TODO eliminar
`;

export const CategoryWrapped = styled.div`
justify-self: center;`;

export const CategoryItem = styled.span`
  letter-spacing: 0.5px;
  font-size: 15px;
  text-transform: uppercase;
  font-weight: 500;
  font-family: "Poppins",Arial,sans-serif;
`;
