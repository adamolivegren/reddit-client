import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { RootState } from "./store";
import {
  getPostComments,
  getSubredditPosts,
  getSubreddits,
} from "../api/reddit";
import Fuse from "fuse.js";
import { useEffect } from "react";
import { Root } from "react-dom/client";

//console.log(getSubredditPosts("Home"));
//console.log(getSubreddits());

const initialState = {
  cards: [],
  subreddits: [],
  isLoading: false,
  error: false,
  searchTerm: "",
  selectedSubreddit: "Home",
};

const redditSlice = createSlice({
  name: "reddit",
  initialState: initialState,
  reducers: {
    setSearchTerm(state, action) {
      state.searchTerm = action.payload;
    },
    setSelectedSubreddit(state, action) {
      state.selectedSubreddit = action.payload;
    },
  },
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
      })
      .addCase(fetchSubreddits.pending, (state, action) => {
        state.isLoading = true;
        state.error = false;
      })
      .addCase(fetchSubreddits.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = false;
        state.subreddits = action.payload;
      })
      .addCase(fetchSubreddits.rejected, (state, action) => {
        state.isLoading = false;
        state.error = true;
      });
  },
});

// Selectors
export const selectCards = (state: RootState) => state.reddit.cards;
export const selectSubreddits = (state: RootState) => state.reddit.subreddits;
export const selectSelectedSubreddit = (state: RootState) =>
  state.reddit.selectedSubreddit;
export const selectSearchTerm = (state: RootState) => state.reddit.searchTerm;

// Actions
export const { setSearchTerm, setSelectedSubreddit } = redditSlice.actions;

// Reducer
export default redditSlice.reducer;

// Redux-thunks for async API request
export const fetchPosts = createAsyncThunk(
  "reddit/fetchPosts",
  async (subreddit: string) => {
    const data = await getSubredditPosts(subreddit);
    return data;
  }
);

export const fetchSubreddits = createAsyncThunk(
  "reddit/fetchSubreddits",
  async () => {
    const data = await getSubreddits();
    return data;
  }
);
