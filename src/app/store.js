import { configureStore } from "@reduxjs/toolkit";
import videosReducer from "../features/videos/vidoesSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
  },
});
