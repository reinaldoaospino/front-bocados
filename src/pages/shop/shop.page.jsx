import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { ProductsWrapped, ShopPageContainer } from "./shop.styles";
import CategoryComponent from "../../components/category/category.component";
import ProductCard from "../../components/product-card/product-card.component";
import CategoryButton from "../../components/category-button/category-button.component";
import { selectCategoryFilter } from "../../redux/category/category.selector";

const ShopPage = ({ productsCollection, categoryFilter, ...rest }) => {
  window.scrollTo(0, 0);
  if (categoryFilter) {
    productsCollection =
      categoryFilter.toLowerCase() === "all"
        ? productsCollection
        : productsCollection.filter(
            (p) => p.category.toLowerCase() === categoryFilter.toLowerCase()
          );
  }

  return (
    <div>
      <ShopPageContainer>
        <CategoryButton />
        <CategoryComponent />
        <ProductsWrapped>
          {productsCollection.map((p) => (
            <ProductCard item={p} {...rest} />
          ))}
        </ProductsWrapped>
      </ShopPageContainer>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categoryFilter: selectCategoryFilter,
});

export default connect(mapStateToProps)(ShopPage);
