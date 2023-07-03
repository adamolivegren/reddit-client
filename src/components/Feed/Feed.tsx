import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectCards } from "../../store/redditSlice";
import { Card, CardType } from "../Card/Card";
import { fetchPosts } from "../../store/redditSlice";

export function Feed() {
  const dispatch = useDispatch();
  const cards = useSelector(selectCards);

  useEffect(() => {
    dispatch(fetchPosts("Home"));
  }, [cards]);

  return (
    <div>
      {cards.map((card: CardType, index) => {
        return <Card key={index} {...card} />;
      })}
    </div>
  );
}
