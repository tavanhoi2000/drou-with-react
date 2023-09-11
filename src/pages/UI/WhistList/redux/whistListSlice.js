import { createSlice } from "@reduxjs/toolkit";

export const callTypes = {
  list: "list",
  action: "action",
};

const initialContactState = {
  listLoading: false,
  error: null,
  actionLoading: false,
  listFavoriteItem: [],
};

export const whistListSlice = createSlice({
  name: "favorite",
  initialState: initialContactState,
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
    favoriteItemFetched: (state, action) => {
      const data = action.payload;
      state.listLoading = false;
      state.error = null;
      state.listFavoriteItem = data.favoriteItem ? data.favoriteItem : [];
    },
  },
});
