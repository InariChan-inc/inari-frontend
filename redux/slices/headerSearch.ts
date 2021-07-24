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
    setFocus: (state: IHeaderSearch, {payload}: PayloadAction<boolean>) => {
      state.isFocused = payload;
    }
  }
});


export default headerSearchSlice;