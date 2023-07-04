import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  selectCards,
  selectIsLoading,
  selectSearchTerm,
} from "../../store/redditSlice";
import { Card, CardType } from "../Card/Card";
import { fetchPosts, selectSelectedSubreddit } from "../../store/redditSlice";
import Fuse from "fuse.js";
import { AppDispatch, RootState } from "../../store/store";
// import { AnimatedList } from "react-animated-list";
import { FeedLoading } from "./FeedLoading";

export function Feed() {
  const dispatch = useDispatch<AppDispatch>();
  const isLoading = useSelector(selectIsLoading);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);
  const searchTerm = useSelector(selectSearchTerm);
  const cards = useSelector(selectCards);
  const [filteredCards, setFilteredCards] = useState(cards); //local state. What is to be displayed.

  const loadingElements = [
    <FeedLoading key="1" />,
    <FeedLoading key="2" />,
    <FeedLoading key="3" />,
  ];

  useEffect(() => {
    dispatch(fetchPosts(selectedSubreddit));
  }, [selectedSubreddit, dispatch]);

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

  // if (isLoading) {
  //   return <AnimatedList animation="grow">{loadingElements}</AnimatedList>;
  // }

  return (
    <div>
      {filteredCards.map((card: CardType, index) => {
        return <Card key={index} {...card} />;
      })}
    </div>
  );
}
