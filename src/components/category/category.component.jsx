import React from "react";
import {
  CategoryContainer,
  CategoryItem,
  CategoryTitle,
  CategoryWrapped,
} from "./category.styles";

const CategoryComponent = ({ selected }) => (
  <CategoryContainer>
    <CategoryWrapped>
      <CategoryTitle>Categories</CategoryTitle>
    </CategoryWrapped>
    <CategoryWrapped>
      <CategoryItem selected={true}>ALL</CategoryItem>
    </CategoryWrapped>
    <CategoryWrapped>
      <CategoryItem>Brownie</CategoryItem>
    </CategoryWrapped>
    <CategoryWrapped>
      <CategoryItem>Cookies</CategoryItem>
    </CategoryWrapped>
    <CategoryWrapped>
      <CategoryItem>Bread</CategoryItem>
    </CategoryWrapped>
    <CategoryWrapped>
      <CategoryItem>Cake</CategoryItem>
    </CategoryWrapped>
    <CategoryWrapped>
      <CategoryItem>Mini desserts</CategoryItem>
    </CategoryWrapped>
    <CategoryWrapped>
      <CategoryItem>Cupcake</CategoryItem>
    </CategoryWrapped>
    <CategoryWrapped>
      <CategoryItem>Sweet box</CategoryItem>
    </CategoryWrapped>
    <CategoryWrapped>
      <CategoryItem>Tequeños</CategoryItem>
    </CategoryWrapped>
  </CategoryContainer>
);

export default CategoryComponent;
