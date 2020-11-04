import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { setCategoryFilter } from "../../redux/category/category.action";
import {
  selectCategoryCollection,
} from "../../redux/category/category.selector";
import {
  CategoryContainer,
  CategoryItem,
  CategoryTitle,
  CategoryWrapped,
} from "./category.styles";

const CategoryComponent = ({
  categoriesCollection,
  setCategoryFilter,
}) => {
  const categoryClick = (option) => {
    setCategoryFilter(option);
  };

  return (
    <CategoryContainer>
      <CategoryWrapped>
        <CategoryTitle>Categories</CategoryTitle>
      </CategoryWrapped>
      {categoriesCollection.map((c) => (
        <CategoryWrapped onClick={()=>categoryClick(c.categoryName)}>
          <CategoryItem>{c.categoryName}</CategoryItem>
        </CategoryWrapped>
      ))}
    </CategoryContainer>
  );
};

const mapStateToProps = createStructuredSelector({
  categoriesCollection: selectCategoryCollection,
});

const mapDispatchToProps = (dispatch) => ({
  setCategoryFilter: (data) => dispatch(setCategoryFilter(data)),
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryComponent);
