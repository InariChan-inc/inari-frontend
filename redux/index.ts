import { configureStore } from '@reduxjs/toolkit';
import {
    user,
    headerSearch
} from './reducers';

const store = configureStore({
    reducer: {
        user,
        headerSearch,
    },
    devTools: process.env.NODE_ENV !== 'production',
})

export default store;