import React from "react";
import {
  BestProductsContainer,
  TitleWrap,
  Title,
  ProductsWrap,
} from "./product-cards-preview.styles";
import ProductCard from "../product-card/product-card.component";

const BestProducts = ({ title, productsCollection }) => {
  return (
    <BestProductsContainer>
      <TitleWrap>
        <Title>{title}</Title>
      </TitleWrap>
      <ProductsWrap>
        {productsCollection
          .map((p) => (
            <ProductCard item={p} />
          ))}
      </ProductsWrap>
    </BestProductsContainer>
  );
};



export default BestProducts;
