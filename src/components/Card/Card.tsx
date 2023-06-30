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
        <img src={img} alt="" className="src" />
        <div className="card-info">
          <p>Posted by: {author?.name}</p>
          <p>{timeSincePost} hours ago</p>
          <p>Number of comments: {numberOfComments}</p>
        </div>
      </div>
    </div>
  );
}
