import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import {
    UserData,
    ThemeEnum,
    ImageData,
} from '../../common/graphql/interfaces';


export const initialState: UserData = {
    name: '',
    email: '',
    aboutMe: '',
    avatar: null,
    theme: ThemeEnum.LIGHT_THEME,
    roleData: null,
    hashColor: '',
    isSixteen: false,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUser: (_, {payload}: PayloadAction<UserData>) => payload,
        clearUser: _ => initialState,
        setAvatar: (state, {payload}: PayloadAction<ImageData>) => {
            state.avatar = payload;
        }
    }
});

export default userSlice;