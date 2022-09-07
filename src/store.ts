import { configureStore } from "@reduxjs/toolkit";
import DirectoryReducer from "./features/DirectorySlice";

export const store = configureStore( {
    reducer: {
        directory: DirectoryReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
