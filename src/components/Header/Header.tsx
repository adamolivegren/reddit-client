import React, { useState } from "react";
import "./Header.css";
import { createDiffieHellmanGroup } from "crypto";
import { toHaveAccessibleDescription } from "@testing-library/jest-dom/matchers";

export function Header() {
  const [searchText, setSearchText] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  const handleSearch = () => {
    console.log(searchText);
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") {
      handleSearch();
    }
  };

  return (
    <div className="header">
      <img
        src="https://1000logos.net/wp-content/uploads/2017/05/Reddit-logo.png"
        alt=""
        className="header-img"
      />
      <div className="searchBar">
        <input
          type="text"
          placeholder="Search for post..."
          value={searchText}
          onChange={handleInputChange}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </div>
  );
}
