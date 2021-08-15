import {
  createSlice,
  PayloadAction
} from "@reduxjs/toolkit";
import {
  REFRESH_TOKEN_EXP_ITEM,
  REFRESH_TOKEN_ITEM,
  TOKEN_EXP_ITEM,
  TOKEN_ITEM
} from '../../common/localStorageItems';
import { 
  Token,
  RefreshToken,
  GeneralToken
} from "../../common/graphql/interfaces";


const initialState: GeneralToken = {
  token: process.browser ? localStorage.getItem(TOKEN_ITEM) || '' : '',
  tokenExp: process.browser ? Number(localStorage?.getItem(TOKEN_EXP_ITEM)) || 0 : 0,
  refreshToken: process.browser ? localStorage.getItem(REFRESH_TOKEN_ITEM) || '' : '',
  refreshTokenExp: process.browser ? Number(localStorage?.getItem(REFRESH_TOKEN_EXP_ITEM)) || 0 : 0
};

const tokenSlice = createSlice({
  name: 'token',
  initialState,
  reducers: {
    setAll: (_, { payload: { token, tokenExp, refreshToken, refreshTokenExp } }: PayloadAction<GeneralToken>) => {
      localStorage?.setItem(TOKEN_ITEM, token);
      localStorage?.setItem(TOKEN_EXP_ITEM, String(tokenExp));
      localStorage?.setItem(REFRESH_TOKEN_ITEM, refreshToken);
      localStorage?.setItem(REFRESH_TOKEN_EXP_ITEM, String(refreshTokenExp));

      return {
        token,
        tokenExp,
        refreshToken,
        refreshTokenExp
      };
    },
    setToken: (state, { payload: { token, tokenExp } }: PayloadAction<Token>) => {
      localStorage?.setItem(TOKEN_ITEM, token);
      localStorage?.setItem(TOKEN_EXP_ITEM, String(tokenExp));

      return { 
        ...state,
        token,
        tokenExp
      };
    },
    setRefreshToken: (state, { payload: { refreshToken, refreshTokenExp } }: PayloadAction<RefreshToken>) => {
        localStorage?.setItem(REFRESH_TOKEN_ITEM, refreshToken);
        localStorage?.setItem(REFRESH_TOKEN_EXP_ITEM, '' + refreshTokenExp);

      return {
        ...state, 
        refreshToken, 
        refreshTokenExp
      };
    },
    deleteToken: state => {
      state.token = '';
      state.tokenExp = 0;
    },
    deleteAll: () => {
      localStorage?.removeItem(REFRESH_TOKEN_ITEM);
      localStorage?.removeItem(REFRESH_TOKEN_EXP_ITEM);
      localStorage?.removeItem(TOKEN_ITEM);
      localStorage?.removeItem(TOKEN_EXP_ITEM);

      return initialState
    }
  }
});


export default tokenSlice;