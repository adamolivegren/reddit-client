import React from "react";
import { Header } from "../Header/Header";
import { Feed } from "../Feed/Feed";

export function Home() {
  return (
    <div className="home">
      <Feed />
    </div>
  );
}
