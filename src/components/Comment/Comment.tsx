import { UserType } from "../User/User";

export type CommentType = {
  author: UserType;
  comment: string;
  timePosted: number;
};
