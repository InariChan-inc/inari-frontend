import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export enum Theme {
    LIGHT_THEME,
    BLACK_THEME
}

export interface Role {
    id: number,
    name: string,
    key: string,
    permissions: string[],
}
export interface IUser {
    name: string,
    email: string,
    theme: Theme,
    // avatarUrl: string,
    roleData: Role | null,
}

const initialState: IUser = {
    name: '',
    email: '',
    // avatarUrl: '',
    theme: Theme.LIGHT_THEME,
    roleData: null,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (_, {payload}: PayloadAction<IUser>) => payload,
        clearUser: _ => initialState,
    }
});

export default userSlice;