import { createSelector } from '@reduxjs/toolkit';
import { IHeaderSearch } from '../slices/headerSearch';

const selectSelf = ({ headerSearch }: { headerSearch: IHeaderSearch }) => headerSearch;

export const isFocused = createSelector(selectSelf, state => state.isFocused);