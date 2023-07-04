import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCards, selectSearchTerm } from "../../store/redditSlice";
import { Card, CardType } from "../Card/Card";
import { fetchPosts, selectSelectedSubreddit } from "../../store/redditSlice";
import Fuse from "fuse.js";
import { AppDispatch } from "../../store/store";

export function Feed() {
  const dispatch = useDispatch<AppDispatch>();
  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  const searchTerm = useSelector(selectSearchTerm);
  const cards = useSelector(selectCards);
  const [filteredCards, setFilteredCards] = useState(cards); //local state. What is to be displayed.

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [selectedSubreddit]);

  useEffect(() => {
    setFilteredCards(cards);
  }, [cards]);

  useEffect(() => {
    if (searchTerm == "") {
      setFilteredCards(cards);
    } else {
      const fuse = new Fuse(cards, {
        keys: ["title", "author"],
        includeScore: true,
        shouldSort: true,
      });
      const fuseResults = fuse.search(searchTerm);
      const filteredResults = fuseResults.map((card) => card.item);
      setFilteredCards(filteredResults);
    }
  }, [searchTerm, cards]);

  return (
    <div>
      {filteredCards.map((card: CardType, index) => {
        return <Card key={index} {...card} />;
      })}
    </div>
  );
}
