import {
  fetchSubreddits,
  selectSubreddits,
  setSelectedSubreddit,
  selectSelectedSubreddit,
} from "../../store/redditSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Subreddits.css";
import { useEffect } from "react";
import { AppDispatch } from "../../store/store";

export type SubredditType = {
  display_name: string;
  url: string;
  id: string;
  header_img: string;
};

export function Subreddits() {
  const dispatch = useDispatch<AppDispatch>();
  const subreddits = useSelector(selectSubreddits);
  const selectedSubreddit = useSelector(selectSelectedSubreddit);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [subreddits]);

  const handleClick = (subredditName: string) => {
    dispatch(setSelectedSubreddit(subredditName));
  };

  return (
    <div className="subreddits-column">
      <h2>Subreddits</h2>
      <ul className="subreddits-list">
        {subreddits.map((subreddit: SubredditType) => {
          return (
            <li key={subreddit.id}>
              <div
                className="subreddit"
                style={{
                  backgroundColor:
                    selectedSubreddit === subreddit.display_name
                      ? "rgb(206, 206, 206)"
                      : "",
                }}
                onClick={() => handleClick(subreddit.display_name)}
              >
                <img src={subreddit.header_img} alt="" />
                {subreddit.display_name}
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
