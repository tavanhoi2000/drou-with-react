import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducer";

const middleWare = [
    ...getDefaultMiddleware({
        thunk:true
    })
]

const store = configureStore({
    reducer: rootReducer,
    middleWare
})

export default store