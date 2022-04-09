import {
    userSlice,
    headerSearchSlice,
    tokenSlice,
} from '../slices';

export const { reducer: user } = userSlice;
export const { reducer: headerSearch } = headerSearchSlice;
export const { reducer: token } = tokenSlice;