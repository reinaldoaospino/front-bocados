import React from "react";
import {
  BestProductsContainer,
  TitleWrap,
  Title,
  ProductsWrap,
} from "./product-cards-preview.styles";
import ProductCard from "../product-card/product-card.component";
import { selectProductCollection } from "../../redux/product/product.selector";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";

const BestProducts = ({ title, productsCollection }) => {
  return (
    <BestProductsContainer>
      <TitleWrap>
        <Title>{title}</Title>
      </TitleWrap>
      <ProductsWrap>
        {productsCollection
          .filter((p) => p.featuredProduct === "True")
          .map((p) => (
            <ProductCard item={p} />
          ))}
      </ProductsWrap>
    </BestProductsContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  productsCollection: selectProductCollection,
});

export default connect(mapStateToProps)(BestProducts);
