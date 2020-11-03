import { createSelector } from 'reselect';

const selectCategory = state => state.category;

const allObjet = { "id": 0, categoryName: "all" };

export const selectCategoryCollectionFilter = createSelector(
    [selectCategory],
    product => product.categoryCollection ? [allObjet, ...product.categoryCollection] : null
)

export const selectCategoryCollection = createSelector( //TODO ver si en verdad se usara este selector
    [selectCategory],
    product => product.categoryCollection
);

export const selectCategoryFilter = createSelector(
    [selectCategory],
    product => product.categoryFilter
)

