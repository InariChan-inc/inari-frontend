import { createSelector } from '@reduxjs/toolkit';
import { UserData } from '../../common/graphql/interfaces';
import { initialState } from '../slices/user';

const selectSelf = ({user}: {user: UserData}) => user;

export const getUser = createSelector(selectSelf, state => state);
export const getName = createSelector(selectSelf, state => state.name);
export const getAboutMe = createSelector(selectSelf, state => state.aboutMe);
export const getEmail = createSelector(selectSelf, state => state.email);
export const getTheme = createSelector(selectSelf, state => state.theme);
export const getAvatar = createSelector(selectSelf, state => state.avatar);
export const getRole = createSelector(selectSelf, state => state.roleData);
export const getColor = createSelector(selectSelf, state => state.hashColor);
export const isUserEmpty = createSelector(selectSelf, state => JSON.stringify(state) === JSON.stringify(initialState));

