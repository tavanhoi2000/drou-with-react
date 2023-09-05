import { createSlice } from "@reduxjs/toolkit";

export const callTypes = {
  list: "list",
  action: "action",
};

const initialShopState = {
  listLoading: false,
  error: null,
  shopProducts: [],
  actionLoading: false,
  categories:[]
};

export const shopSlice = createSlice({
  name: "shop",
  initialState: initialShopState,
  reducers: {
    catchError: (state, action) => {
      state.error = `${action.type}: ${action.payload.error}`;
      if (action.payload.callTypes === callTypes.list) {
        state.listLoading = false;
      }
    },
    startCall: (state, action) => {
      state.error = null;
      if (action.payload.callTypes === callTypes.list) {
        state.listLoading = true;
      } else if (action.payload.callTypes === callTypes.action) {
        state.actionLoading = false;
      } else {
        state.importLoading = false;
      }
    },
    endCall: (state, action) => {
      state.error = null;
      if (action.payload.callTypes === callTypes.list) {
        state.listLoading = false;
      } else if (action.payload.callTypes === callTypes.action) {
        state.actionLoading = false;
      } else {
        state.importLoading = false;
      }
    },
    productsFetched: (state, action) => {
      const data = action.payload;
      state.listLoading = false;
      state.error = null;
      state.shopProducts = data.products ? data.products : [];
    },
    categoriesFetched:(state, action) => {
      const data = action.payload
      state.listLoading = false
      state.error = null
      state.categories = data.categories? data.categories: []
    }
  },
});