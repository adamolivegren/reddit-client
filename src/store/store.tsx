import { configureStore } from "@reduxjs/toolkit";
import redditReducer from "./redditSlice";
export type RootState = ReturnType<typeof store.getState>;

const store = configureStore({
  reducer: {
    reddit: redditReducer,
  },
});

export default store;
