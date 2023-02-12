import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResult: (state, action) => {
      //   state = { ...action.payload, ...state };
      state = Object.assign(state, action.payload);
    },
    clearSearch: (state) => {
      state = {};
    },
  },
});

export const { cacheResult, clearSearch } = searchSlice.actions;
export default searchSlice.reducer;
