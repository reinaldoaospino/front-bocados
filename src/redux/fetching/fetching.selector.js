import { createSelector } from 'reselect';

const selectFetching = state => state.fetching;

export const selectIsFetching= createSelector(
    [selectFetching],
    fetching => fetching.isFetching
)

export const selectIsFetchingForm= createSelector(
    [selectFetching],
    fetching => fetching.isFetchingForm
)

export const selectFetchingComplete = createSelector(
    [selectFetching],
    fetching => fetching.fetchingComplete
)

export const selectFetchingSuccess = createSelector(
    [selectFetching],
    fetching => fetching.fetchingSuccess
)