import React from "react";
import { ProductPageContainer } from "./product.styles";
import SingleProductPreview from "../../components/single-product-preview/single-product-preview.component";
import ImgExample from "../../assets/singleProduct.png";

const ProductPage = () => (
  <ProductPageContainer>
    <SingleProductPreview img={ImgExample} />
  </ProductPageContainer>
);

export default ProductPage;
