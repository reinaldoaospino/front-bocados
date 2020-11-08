import FetchingActionTypes from './fetching.types';

export const setIsFetching = (value) => ({
    type: FetchingActionTypes.IS_FETCHING,
    payload: value
})

export const setIsFetchingForm = (value) => ({
    type: FetchingActionTypes.IS_FETCHING_FORM,
    payload: value
})


export const setFetchingSuccess = (value) => ({
    type: FetchingActionTypes.FETCHING_SUCCESS,
    payload: value
})

export const setFetchingComplete = (value) => ({
    type: FetchingActionTypes.FETCHING_COMPLETE,
    payload: value
})
