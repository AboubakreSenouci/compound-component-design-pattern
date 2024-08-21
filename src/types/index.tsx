import { PropsWithChildren } from "react";

export type Post = {
  postTitle: string;
  postContent: string;
  postAuthor: string;
};

export interface postCardProps extends PropsWithChildren {
  post: Post;
}
