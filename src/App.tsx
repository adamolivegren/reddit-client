import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header/Header";
import { Feed } from "./components/Feed/Feed";
import { Subreddits } from "./components/Subreddits/Subreddits";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <div className="feed">
          <Feed />
        </div>
        <div className="subreddits">
          <Subreddits />
        </div>
      </div>
    </div>
  );
}

export default App;
