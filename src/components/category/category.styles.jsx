import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 12% 12% 12% 12%;
  margin-top: 200px; //TODO eliminar
  text-align: center;
`;

export const CategoryWrapped = styled.div`
  border-radius: 10px;
  background-color: ${(props) => (props.selected ? "#C5DB74" : "none")};
  color: ${(props) => (props.selected ? "white" : "none")};
  ${(props) => props.color}
  &:hover {
    background-color: #C5DB74;
    color:white;
    cursor: pointer;
  }
`;

export const CategoryItem = styled.span`
  letter-spacing: 0.5px;
  font-size: 17px;
  text-transform: uppercase;
  font-weight: 500;
  font-family: "Poppins", Arial, sans-serif;
`;
