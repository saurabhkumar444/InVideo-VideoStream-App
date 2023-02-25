import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlice";
import searchSlice from "./searchSlice";
import selectedVideoSlice from "./selectedVideoSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlice,
    selectedVideo: selectedVideoSlice,
  },
});

export default store;
