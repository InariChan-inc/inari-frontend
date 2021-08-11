import { createSelector } from "@reduxjs/toolkit";
import { GeneralToken } from "../../common/graphql/interfaces";

const selectSelf = ({ token }: { token: GeneralToken}) => token;

export const getToken = createSelector(selectSelf, state => ({token: state.token, exp: state.tokenExp}));
export const getRefreshToken = createSelector(selectSelf, state => ({token: state.refreshToken, exp: state.refreshTokenExp}))