import React from "react";
import {
  CategoryContainer,
  CategoryItem,
  CategoryWrapped,
} from "./category.styles";


const CategoryComponent = ({ selected }) => (
  <CategoryContainer>
    <CategoryWrapped selected={true}>
      <CategoryItem >ALL</CategoryItem>
    </CategoryWrapped>
    <CategoryWrapped>
      <CategoryItem>Brownie</CategoryItem>
    </CategoryWrapped>
    <CategoryWrapped>
      <CategoryItem>Cookies</CategoryItem>
    </CategoryWrapped>
    <CategoryWrapped>
      <CategoryItem>BREAD</CategoryItem>
    </CategoryWrapped>
  </CategoryContainer>
);

export default CategoryComponent;
