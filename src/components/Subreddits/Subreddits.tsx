import { UserType } from "../User/User";
import { selectSubreddits } from "../../store/subredditsSlice";
import { useSelector } from "react-redux";
import { User } from "../User/User";
import "./Subreddits.css";

export type SubredditsType = {
  users: UserType[];
};

export function Subreddits() {
  const users = useSelector(selectSubreddits);
  return (
    <div className="subreddits">
      <h2>Subreddits</h2>
      <div className="users">
        {users.map((user, index) => {
          return <User key={index} {...user} />;
        })}
      </div>
    </div>
  );
}
