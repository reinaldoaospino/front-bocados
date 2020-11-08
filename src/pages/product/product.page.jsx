import React from "react";
import { ProductPageContainer } from "./product.styles";
import SingleProductPreview from "../../components/single-product-preview/single-product-preview.component";
import BestProducts from "../../components/product-cards-preview/product-cards-preview.component";
import {
  selectProductById,
  selectProductCollection,
} from "../../redux/product/product.selector";
import { connect } from "react-redux";

const ProductPage = ({ product, productsCollection }) => {
  window.scrollTo(0, 0);
  return (
    <ProductPageContainer>
      <SingleProductPreview product={product} />
      {
        <BestProducts
          title={"Related Products"}
          productsCollection={productsCollection
            .filter((p) => p.category === product.category)
            .filter((p) => p.productName !== product.productName)}
        />
      }
    </ProductPageContainer>
  );
};

const mapStateToProps = (state, ownProps) => ({
  product: selectProductById(ownProps.match.params.productId)(state),
  productsCollection: selectProductCollection(state),
});

export default connect(mapStateToProps)(ProductPage);
