import "./User.css";

export type UserType = {
  name: string;
  profileImg?: string;
};

export function User({ name, profileImg }: UserType) {
  return (
    <div className="user">
      <img src={profileImg} alt="" />
      <p>{name}</p>
    </div>
  );
}
