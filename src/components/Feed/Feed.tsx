import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCards, selectSearchTerm } from "../../store/redditSlice";
import { Card, CardType } from "../Card/Card";
import {
  fetchPosts,
  selectSelectedSubreddit,
  setCards,
} from "../../store/redditSlice";
import Fuse from "fuse.js";
import { AppDispatch } from "../../store/store";

export function Feed() {
  const dispatch = useDispatch<AppDispatch>();
  const cards = useSelector(selectCards);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  const searchTerm = useSelector(selectSearchTerm);

  // Search library Fuse.js
  const fuse = new Fuse(cards, {
    keys: ["title", "author"],
    includeScore: true,
  });

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [selectedSubreddit]);

  useEffect(() => {
    if (searchTerm !== "") {
      const searchResults = fuse.search(searchTerm).map((card) => card.item);
      dispatch(setCards(searchResults));
    }
  }, [searchTerm]);

  return (
    <div>
      {cards.map((card: CardType, index) => {
        return <Card key={index} {...card} />;
      })}
    </div>
  );
}
