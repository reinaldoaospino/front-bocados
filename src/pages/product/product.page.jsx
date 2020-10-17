import React from "react";
import { ProductPageContainer } from "./product.styles";
import SingleProductPreview from "../../components/single-product-preview/single-product-preview.component";
import ImgExample from "../../assets/singleProduct.png";
import BestProducts from "../../components/product-cards-preview/product-cards-preview.component";

const ProductPage = () => (
  <ProductPageContainer>
    <SingleProductPreview img={ImgExample} />
    <BestProducts title="Related Products" />
  </ProductPageContainer>
);

export default ProductPage;
