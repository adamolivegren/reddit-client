import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";

const exampleImg =
  "https://images.unsplash.com/photo-1519681393784-d120267933ba?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80";

//TODO: add type for state
const initialState = {
  cards: [
    {
      title: "Example title 1",
      img: exampleImg,
      timeSincePost: 8,
      numberOfComments: 0,
      author: {
        name: "Adam",
      },
    },
    {
      title: "Example title 2",
      img: exampleImg,
      timeSincePost: 8,
      numberOfComments: 0,
      author: {
        name: "Hampus",
      },
    },
  ],
  //add loading, success, error etc for thunks
  //add searchTerm for api call
};

const redditSlice = createSlice({
  name: "reddit",
  initialState: initialState,
  reducers: {},
});

//TODO: export actions/reducers

export const selectCards = (state: RootState) => state.reddit.cards;
export default redditSlice.reducer;
