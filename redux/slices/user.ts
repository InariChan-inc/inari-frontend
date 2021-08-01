import { createSlice, PayloadAction } from '@reduxjs/toolkit';

enum Theme {
    LIGHT_THEME,
    BLACK_THEME
}

interface Role {
    id: number,
    name: string,
    key: string,
    permissions: string[],
}
export interface IUser {
    id: number,
    name: string,
    email: string,
    theme: Theme,
    avatarUrl: string,
    role: Role,
}

const initialState: IUser = {
    id: undefined,
    name: '',
    email: '',
    avatarUrl: '',
    theme: Theme.LIGHT_THEME,
    role: {
        id: undefined,
        name: '',
        key: '',
        permissions: []
    },
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