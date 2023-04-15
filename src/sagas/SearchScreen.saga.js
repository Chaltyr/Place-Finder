import {put, takeEvery} from 'redux-saga/effects';
import {createAction} from '@reduxjs/toolkit';
import {
  removeSearchHistoryItem,
  setSearchData,
  setSearchResults,
} from '../slice/SearchScreen.reducer';

export function* storeSearchResult(action) {
  try {
    yield put(setSearchResults(action.payload));
  } catch (error) {
    console.log(error);
  }
}

export function* removeSearchHistory(action) {
  try {
    yield put(removeSearchHistoryItem(action.payload));
  } catch (error) {
    console.log(error);
  }
}

export function* storeSearchData(action) {
  try {
    yield put(setSearchData({}));
    yield put(setSearchData(action.payload));
  } catch (error) {
    console.log(error);
  }
}

export function* SearchScreenSaga() {
  yield takeEvery(storeSearchResultAction.type, storeSearchResult);
  yield takeEvery(removeSearchHistoryAction.type, removeSearchHistory);
  yield takeEvery(storeSearchDataAction.type, storeSearchData);
}

export const storeSearchResultAction = createAction('storeSearchResultAction');
export const removeSearchHistoryAction = createAction(
  'removeSearchHistoryAction',
);
export const storeSearchDataAction = createAction('storeSearchDataAction');

export default SearchScreenSaga;
