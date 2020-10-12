import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: grid;
  justify-content: center;
  grid-template-columns: 12% 12% 12% 12%;
  margin-top: 80px; //TODO eliminar
  text-align: center;

  @media (max-width: 845px) {
    grid-template-columns: 14% 14% 14% 14%;
  }

  @media (max-width: 845px) {
    grid-template-columns: 17% 17% 17% 17%;
  }

  @media (max-width: 583px) {
    grid-template-columns: 20% 20% 20% 20%;
  }

  @media (max-width: 490px) {
    grid-template-columns: 25% 25%;
    grid-gap: 14px;
  }

  @media (max-width: 385px) {
    grid-template-columns: 28% 28%;
    grid-gap: 14px;
  }
  @media (max-width: 341px) {
    grid-template-columns: 30% 30%;
    grid-gap: 14px;
  }
`;

export const CategoryWrapped = styled.div`
  border-radius: 10px;
  background-color: ${(props) => (props.selected ? "#C5DB74" : "none")};
  color: ${(props) => (props.selected ? "white" : "none")};
  ${(props) => props.color}
  &:hover {
    background-color: #c5db74;
    color: white;
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
