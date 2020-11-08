import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import CategoryComponent from "../../components/category/category.component";
import {
  PaginationWrap,
  ProductsWrapped,
  ShopPageContainer,
} from "./shop.styles";
import ProductCard from "../../components/product-card/product-card.component";
import CategoryButton from "../../components/category-button/category-button.component";
import { createStructuredSelector } from "reselect";
import { selectCategoryFilter } from "../../redux/category/category.selector";
import { Pagination } from "@material-ui/lab";

const ShopPage = ({ productsCollection, categoryFilter, ...rest }) => {
  const [page, setPage] = useState(1);
  const [maxItem, setMaxItem] = useState(3);
  const [pageValue, setPageValue] = useState(0);
  window.scrollTo(0, 0);
  if (categoryFilter) {
    productsCollection =
      categoryFilter.toLowerCase() === "all"
        ? productsCollection
        : productsCollection.filter(
            (p) => p.category.toLowerCase() === categoryFilter.toLowerCase()
          );
  }

  useEffect(()=>{
    setPage(1)
  },[categoryFilter,setPage])

  var max = maxItem;
  var min = 0;

  if (page > 1) {
    max = page * maxItem;
    min = max - maxItem;
  }

  const handlePaginationChange = (event, value) => {
    setPage(value);
  };
  return (
    <div>
      <ShopPageContainer>
        <CategoryButton />
        <CategoryComponent />
        <ProductsWrapped>
          {productsCollection.slice(min, max).map((p) => (
            <ProductCard
            item={p}
              {...rest}
            />
          ))}
        </ProductsWrapped>
      </ShopPageContainer>
      <PaginationWrap>
        <Pagination
          count={Math.ceil(productsCollection.length / 5) + 1}
          page={page}
          variant="outlined"
          onChange={handlePaginationChange}
        />
      </PaginationWrap>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  categoryFilter: selectCategoryFilter,
});

export default connect(mapStateToProps)(ShopPage);
