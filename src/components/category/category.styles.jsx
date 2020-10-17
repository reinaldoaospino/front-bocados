import styled from "styled-components";

export const CategoryContainer = styled.div`
position: absolute;
left: -240px;
display: grid;
grid-gap: 18px;
`;

export const CategoryTitle = styled.h3`

`

export const CategoryItem = styled.span`
  letter-spacing: 0.5px;
  font-size: 17px;
  text-transform: uppercase;
  font-weight: 500;
  font-family: "Poppins", Arial, sans-serif;
  text-decoration-line: ${(props) => (props.selected ? "underline" : "none")}; ; 

  &:hover {
    cursor: pointer;
  }
`;
