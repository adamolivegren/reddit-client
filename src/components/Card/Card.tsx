import React from "react";
import { UserType } from "../User/User";
import { CommentsFeedType } from "../CommentsFeed/CommentsFeed";
import "./Card.css";

export type CardType = {
  title: string;
  img: string;
  timeSincePost: number;
  author: UserType;
  comments?: CommentsFeedType;
  numberOfComments: number;
};
export function Card({
  title,
  img,
  timeSincePost,
  author,
  comments,
  numberOfComments,
}: CardType) {
  return (
    <div className="card-div">
      <h2>{title}</h2>
      <img src={img} alt="" className="src" />
      <div className="card-info">
        <p>Posted by: {author?.name}</p>
        <p>{timeSincePost} hours ago</p>
        <p>Number of comments: {numberOfComments}</p>
      </div>
    </div>
  );
}
