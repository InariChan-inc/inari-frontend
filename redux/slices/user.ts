import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    UserData,
    ThemeEnum
} from '../../common/graphql/interfaces';


export const initialState: UserData = {
    name: '',
    email: '',
    aboutMe: '',
    avatar: null,
    theme: ThemeEnum.LIGHT_THEME,
    roleData: null,
    hashColor: '',
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (_, {payload}: PayloadAction<UserData>) => payload,
        clearUser: _ => initialState,
    }
});

export default userSlice;