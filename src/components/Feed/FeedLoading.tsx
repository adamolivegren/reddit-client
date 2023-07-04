import {
  BsFillArrowUpCircleFill,
  BsFillArrowDownCircleFill,
} from "react-icons/bs";

export function FeedLoading() {
  return (
    <div className="card-div">
      <div className="left-div">
        <BsFillArrowUpCircleFill />
        <p>23</p>
        <BsFillArrowDownCircleFill />
      </div>
      <div className="right-div">
        <h2>Title</h2>
        <img src={""} alt="" className="src" />
        <div className="card-info">
          <p>Posted by: </p>
          <p> hours ago</p>
          <p>Number of comments:</p>
        </div>
      </div>
    </div>
  );
}
