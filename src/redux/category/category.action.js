import CategoryActionTypes from './category.types';

export const fetchGetCategoryStart = () => ({
    type: CategoryActionTypes.FETCH_GET_CATEGORY_START,
})

export const fetchGetCategorySuccess = (categoriesCollection) => ({
    type: CategoryActionTypes.FETCH_GET_CATEGORY_SUCCESS,
    payload: categoriesCollection
})

export const fetchGetCategoryFailure = (errorMessage) => ({
    type: CategoryActionTypes.FETCH_GET_CATEGORY_FAILURE,
    payload: errorMessage
})

export const setCategoryFilter = (category) => ({
    type: CategoryActionTypes.SET_CATEGORY_FILTER,
    payload: category
})
