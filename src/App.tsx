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
        <div className="left-col">
          <Feed />
        </div>
        <div className="right-col">
          <Subreddits />
        </div>
      </div>
    </div>
  );
}

export default App;
