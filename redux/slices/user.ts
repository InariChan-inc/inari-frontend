import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IPermission {
    key: string,
    resolves: string[],
}

export interface IUser {
    name: string,
    email: string,
    avatarUrl: string,
    permissions: IPermission[],
}

const initialState: IUser = {
    name: '',
    email: '',
    avatarUrl: '',
    permissions: [],
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (state: IUser, {payload}: PayloadAction<IUser>) => payload,
        clearUser: (state: IUser) => initialState,
    }
});

export default userSlice;