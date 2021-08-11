import { createSelector } from '@reduxjs/toolkit';
import { UserData } from '../../common/graphql/interfaces';

const selectSelf = ({user}: {user: UserData}) => user;

export const getUser = createSelector(selectSelf, state => state);
export const getName = createSelector(selectSelf, state => state.name);
export const getEmail = createSelector(selectSelf, state => state.email);
export const getAvatar = createSelector(selectSelf, state => state.avatar);
export const getRole = createSelector(selectSelf, state => state.roleData);

