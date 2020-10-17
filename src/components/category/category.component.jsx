import React from "react";
import {
  CategoryContainer,
  CategoryItem,
  CategoryTitle,
} from "./category.styles";


const CategoryComponent = ({ selected }) => (
  <CategoryContainer>
    <CategoryTitle>Categories</CategoryTitle>
      <CategoryItem selected={true} >ALL</CategoryItem>
      <CategoryItem>Brownie</CategoryItem>
      <CategoryItem>Cookies</CategoryItem>
      <CategoryItem>Bread</CategoryItem>
      <CategoryItem>Cake</CategoryItem>
      <CategoryItem>Mini desserts</CategoryItem>
      <CategoryItem>Cupcake</CategoryItem>
      <CategoryItem>Sweet box</CategoryItem>
      <CategoryItem>Tequeños</CategoryItem> 
  </CategoryContainer>
);

export default CategoryComponent;
