import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";
import { UserType } from "../User/User";
import { CommentsFeedType } from "../CommentsFeed/CommentsFeed";
import "./Card.css";
import { useState } from "react";

export type CardType = {
  title: string;
  thumbnail?: string;
  timeSincePost?: number;
  author: string;
  comments?: CommentsFeedType;
  num_comments: number;
};
export function Card({
  title,
  thumbnail,
  timeSincePost,
  author,
  comments,
  num_comments,
}: CardType) {
  const [isUpvoted, setIsUpvoted] = useState<boolean>(false);
  const [isDownvoted, setIsDownvoted] = useState<boolean>(false);

  const handleVoteClick = (voteType: string) => {
    setIsUpvoted(voteType === "up" && !isUpvoted);
    setIsDownvoted(voteType === "down" && !isDownvoted);
  };

  return (
    <div className="card-div">
      <div className="left-div">
        <BsFillArrowUpCircleFill
          style={{ color: isUpvoted ? "green" : "" }}
          onClick={() => handleVoteClick("up")}
        />
        <p style={{ color: isUpvoted ? "green" : isDownvoted ? "red" : "" }}>
          23
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
          <p>{timeSincePost} hours ago</p>
          <p>Number of comments: {num_comments}</p>
        </div>
      </div>
    </div>
  );
}
