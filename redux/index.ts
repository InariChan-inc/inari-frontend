import { configureStore } from '@reduxjs/toolkit';
import {
    user,
    headerSearch,
    token
} from './reducers';

const store = configureStore({
    reducer: {
        user,
        headerSearch,
        token
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;