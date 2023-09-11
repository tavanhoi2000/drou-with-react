import { combineReducers } from "@reduxjs/toolkit";
import { homeSlice } from "../pages/UI/Home/redux/homeSlice";
import { shopSlice } from "../pages/UI/Shop/redux/shopSlice";
import { cartSlice } from "../pages/UI/Cart/redux/cartSlice";
import { whistListSlice } from "../pages/UI/WhistList/redux/whistListSlice";

export const rootReducer = combineReducers({
    home:homeSlice.reducer,
    shop:shopSlice.reducer,
    cart: cartSlice.reducer,
    favorite: whistListSlice.reducer
})