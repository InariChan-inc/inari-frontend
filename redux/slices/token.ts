import {
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit";
import {
  REFRESH_TOKEN_EXP_ITEM,
  REFRESH_TOKEN_ITEM
} from '../localStorageItems';
import { 
  Token,
  RefreshToken,
  GeneralToken
} from "../../common/graphql/interfaces";


const initialState: GeneralToken = {
  token: '',
  tokenExp: 0,
  refreshToken: process.browser ? localStorage.getItem(REFRESH_TOKEN_ITEM) || '' : '',
  refreshTokenExp: process.browser ? Number(localStorage?.getItem(REFRESH_TOKEN_EXP_ITEM)) || 0 : 0
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setAll: (_, {payload}: PayloadAction<GeneralToken>) => payload,
    setToken: (state, { payload: { token, tokenExp } }: PayloadAction<Token>) => ({ ...state, token, tokenExp }),
    setRefreshToken: (state, { payload: { refreshToken, refreshTokenExp, save = false } }: PayloadAction<RefreshToken & {save?: boolean}>) => {

      if (save) {
        localStorage?.setItem(REFRESH_TOKEN_ITEM, refreshToken);
        localStorage?.setItem(REFRESH_TOKEN_EXP_ITEM, '' + refreshTokenExp);
      }

      return ({...state, refreshToken, refreshTokenExp})
    },
    deleteToken: state => {
      state.token = '';
      state.tokenExp = 0;
    },
    deleteAll: () => {
      localStorage?.setItem(REFRESH_TOKEN_ITEM, '');
      localStorage?.setItem(REFRESH_TOKEN_EXP_ITEM, '');

      return initialState
    }
  }
});


export default tokenSlice;