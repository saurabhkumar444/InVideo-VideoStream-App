import { createSlice } from "@reduxjs/toolkit";

const selectedVideoSlice = createSlice({
  name: "selectedVideo",
  initialState: {
    selectedVideo: [],
  },
  reducers: {
    selectedVideoData: (state, action) => {
      state.selectedVideo.pop();
      state.selectedVideo.push(action.payload);
    },
  },
});

export const { selectedVideoData } = selectedVideoSlice.actions;
export default selectedVideoSlice.reducer;
