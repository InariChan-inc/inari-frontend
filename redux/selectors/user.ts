import { createSelector } from '@reduxjs/toolkit';
import { IUser } from '../slices/user';

const selectSelf = ({user}: {user: IUser}) => user;

export const getUser = createSelector(selectSelf, state => state);

export const getName = createSelector(selectSelf, state => state.name);

export const getEmail = createSelector(selectSelf, state => state.email);

export const getAvatarUrl = createSelector(selectSelf, state => state.avatarUrl);

export const getPermissions = createSelector(selectSelf, state => state.permissions);

