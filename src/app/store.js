import { configureStore } from "@reduxjs/toolkit";
import tagsReduce from "../features/tags/tagsSlice";
import videosReducer from "../features/videos/vidoesSlice";
import videoReducer from "../features/video/videoSlice";

export const store = configureStore({
  reducer: {
    videos: videosReducer,
    tags: tagsReduce,
    video: videoReducer,
  },
});
