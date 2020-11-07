import React from "react";
import { ProductPageContainer } from "./product.styles";
import SingleProductPreview from "../../components/single-product-preview/single-product-preview.component";
import BestProducts from "../../components/product-cards-preview/product-cards-preview.component";
import { selectProductById } from "../../redux/product/product.selector";
import { connect } from 'react-redux';

const ProductPage = ({ product }) => (
  <ProductPageContainer>
    <SingleProductPreview product={product} />
    <BestProducts title="Related Products" />
  </ProductPageContainer>
);

const mapStateToProps = (state, ownProps) => ({
  product: selectProductById(ownProps.match.params.productId)(state),
});

export default connect(mapStateToProps)(ProductPage);
