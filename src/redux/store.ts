import {configureStore} from '@reduxjs/toolkit';
import {
    drugReducer
} from "../features/search/presentation/redux/searchSlice.ts";
// adjust the path

export const store = configureStore({
    reducer: {
        drug: drugReducer,
    },
    devTools: process.env.NODE_ENV !== 'production',
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;