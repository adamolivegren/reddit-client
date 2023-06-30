import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Root } from "react-dom/client";

const initialState = {
  users: [
    {
      name: "Adam Olivegren",
      profileImg: "https://cdn-icons-png.flaticon.com/512/4436/4436481.png",
    },
    {
      name: "Adam Olivegren",
      profileImg: "https://cdn-icons-png.flaticon.com/512/4436/4436481.png",
    },
    {
      name: "Adam Olivegren",
      profileImg: "https://cdn-icons-png.flaticon.com/512/4436/4436481.png",
    },
  ],
};

const subredditsSlice = createSlice({
  name: "subreddits",
  initialState: initialState,
  reducers: {},
});

//TODO: export actions/reducers
export const selectSubreddits = (state: RootState) => state.subreddits.users;
export default subredditsSlice.reducer;
