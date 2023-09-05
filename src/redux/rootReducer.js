import { combineReducers } from "@reduxjs/toolkit";
import { homeSlice } from "../pages/UI/Home/redux/homeSlice";
import { shopSlice } from "../pages/UI/Shop/redux/shopSlice";
import { cartSlice } from "../pages/UI/Cart/redux/cartSlice";

export const rootReducer = combineReducers({
    home:homeSlice.reducer,
    shop:shopSlice.reducer,
    cart: cartSlice.reducer
})