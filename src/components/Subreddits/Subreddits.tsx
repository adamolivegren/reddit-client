import { fetchSubreddits, selectSubreddits } from "../../store/redditSlice";
import { useDispatch, useSelector } from "react-redux";
import "./Subreddits.css";
import { useEffect } from "react";

export type SubredditType = {
  display_name: string;
  url: string;
  id: string;
  header_img: string;
};

export function Subreddits() {
  const dispatch = useDispatch();
  const subreddits = useSelector(selectSubreddits);

  useEffect(() => {
    dispatch(fetchSubreddits());
  }, [subreddits]);

  return (
    <div className="subreddits-column">
      <h2>Subreddits</h2>
      <ul className="subreddits-list">
        {subreddits.map((subreddit: SubredditType) => {
          return (
            <li key={subreddit.id}>
              <div className="subreddit">
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
