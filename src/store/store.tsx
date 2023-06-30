import { configureStore } from "@reduxjs/toolkit";
import redditReducer from "./redditSlice";
import subredditsSlice from "./subredditsSlice";
export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    reddit: redditReducer,
    subreddits: subredditsSlice,
  },
});

export default store;
