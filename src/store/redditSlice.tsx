import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import {
  getPostComments,
  getSubredditPosts,
  getSubreddits,
} from "../api/reddit";

console.log(getSubredditPosts("Home"));

const initialState = {
  cards: [],
  isLoading: false,
  error: false,
  searchTerm: "",
  selectedSubreddit: "",
};

const redditSlice = createSlice({
  name: "reddit",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.cards = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

export const selectCards = (state: RootState) => state.reddit.cards;
export default redditSlice.reducer;

/**
 * Redux-thunk for asynx API request
 **/
export const fetchPosts = createAsyncThunk(
  "reddit/fetchPosts",
  async (subreddit: string) => {
    const data = await getSubredditPosts(subreddit);
    return data;
  }
);
