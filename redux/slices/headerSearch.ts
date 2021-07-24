import {
  createSlice,
  PayloadAction,
} from '@reduxjs/toolkit';


export interface IHeaderSearch {
  isFocused: boolean
};


const initialState: IHeaderSearch = {
  isFocused: false
};

const headerSearchSlice = createSlice({
  name: 'headerSearch',
  initialState,
  reducers: {
    toggleFocus: (state: IHeaderSearch) => {
      state.isFocused = !state.isFocused
    }
  }
});


export default headerSearchSlice;