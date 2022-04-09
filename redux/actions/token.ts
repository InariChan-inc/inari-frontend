import { tokenSlice } from '../slices';

export const {
  setAll,
  setToken,
  setRefreshToken,
  deleteToken,
  deleteAll
} = tokenSlice.actions;