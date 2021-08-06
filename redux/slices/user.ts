import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    UserData,
    ThemeEnum
} from '../../common/graphql/interfaces';


const initialState: UserData = {
    name: '',
    email: '',
    avatar: null,
    theme: ThemeEnum.LIGHT_THEME,
    roleData: null,
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