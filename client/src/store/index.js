import {configureStore} from "@reduxjs/toolkit"
import userReducer from './slices/userSlice'
import allReducer from './slices/allSlice'
import preloaderReducer from './slices/preloaderSlice'
import reviewReducer from './slices/reviewSlice'


export const store = configureStore({
    reducer: {
        userReducer,
        allReducer,
        preloaderReducer,
        reviewReducer,
    }
})