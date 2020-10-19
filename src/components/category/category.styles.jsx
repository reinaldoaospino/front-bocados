import styled from "styled-components";

export const CategoryContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 100px;
  width: 100%;

  @media (max-width: 916px) {
    display: none;
  }
`;

export const CategoryWrapped = styled.div`
  margin-bottom: 35px;
  width: 50%;
  margin-left: auto;
  margin-right: auto;
`;
export const CategoryTitle = styled.h3``;

export const CategoryItem = styled.span`
  letter-spacing: 0.5px;
  font-size: 17px;
  text-transform: uppercase;
  font-weight: 500;
  font-family: "Poppins", Arial, sans-serif;
  text-decoration-line: ${(props) => (props.selected ? "underline" : "none")};

  &:hover {
    cursor: pointer;
  }
`;
