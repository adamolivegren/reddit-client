import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { CommentsFeedType } from "../CommentsFeed/CommentsFeed";
import "./Card.css";
import { useState } from "react";

export type CardType = {
  title: string;
  thumbnail?: string;
  created: number;
  author: string;
  num_comments: number;
  ups: number;
  downs: number;
};
export function Card({
  title,
  thumbnail,
  created,
  author,
  num_comments,
  ups,
  downs,
}: CardType) {
  const [isUpvoted, setIsUpvoted] = useState<boolean>(false);
  const [isDownvoted, setIsDownvoted] = useState<boolean>(false);

  const handleVoteClick = (voteType: string) => {
    setIsUpvoted(voteType === "up" && !isUpvoted);
    setIsDownvoted(voteType === "down" && !isDownvoted);
  };

  const convertTimeCreated = (createdTime: number): number => {
    const currentTime = Math.floor(Date.now() / 1000);
    return Math.floor((currentTime - createdTime) / 3600);
  };

  return (
    <div className="card-div">
      <div className="left-div">
        <BsFillArrowUpCircleFill
          style={{ color: isUpvoted ? "green" : "" }}
          onClick={() => handleVoteClick("up")}
        />
        <p style={{ color: isUpvoted ? "green" : isDownvoted ? "red" : "" }}>
          {ups - downs}
        </p>
        <BsFillArrowDownCircleFill
          style={{ color: isDownvoted ? "red" : "" }}
          onClick={() => handleVoteClick("down")}
        />
      </div>
      <div className="right-div">
        <h2>{title}</h2>
        <img src={thumbnail} alt="" className="src" />
        <div className="card-info">
          <p>Posted by: {author}</p>
          <p>{convertTimeCreated(created)} hours ago</p>
          <p>Number of comments: {num_comments}</p>
        </div>
      </div>
    </div>
  );
}
