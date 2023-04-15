import {createSlice} from '@reduxjs/toolkit';

const initialState = {searchResults: [], searchData: {}};

const SearchScreenSlice = createSlice({
  name: 'searchScreen',
  initialState,
  reducers: {
    setSearchResults(state, action) {
      state.searchResults.push(action.payload);
    },
    removeSearchHistoryItem(state, action) {
      const newList = [...state.searchResults];
      newList.splice(action.payload, 1);
      return {
        ...state,
        searchResults: newList,
      };
    },
    setSearchData(state, action) {
      state.searchData = action.payload;
    },
  },
});

export const searchResultsReducer = SearchScreenSlice.reducer;
export const {setSearchResults, removeSearchHistoryItem, setSearchData} =
  SearchScreenSlice.actions;
