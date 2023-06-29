import React from "react";
import { useSelector } from "react-redux";
import { selectCards } from "../../store/redditSlice";
import { Card } from "../Card/Card";

export function Feed() {
  const cards = useSelector(selectCards);

  return (
    <div>
      {cards.map((card, index) => {
        return <Card key={index} {...card} />;
      })}
    </div>
  );
}
