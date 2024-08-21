import { postCardProps } from "../types";
import { postCardContext } from "../context";
import { twMerge } from "tailwind-merge";
import { usePostCardContext } from "../hooks/usePostCardContext";

export const PostCard = ({ children, post }: postCardProps) => {
  return (
    <postCardContext.Provider value={{ post }}>
      <div className=" flex flex-col gap-10 w-2/6 rounded-lg shadow-xl bg-gray-100 p-4">
        {children}
      </div>
    </postCardContext.Provider>
  );
};

PostCard.Title = function PostCardTitle({ classname }: { classname?: string }) {
  const { post } = usePostCardContext();

  return (
    <p className={twMerge("font-semibold text-blue-950", classname)}>
      {post.postTitle}
    </p>
  );
};

PostCard.Content = function PostCardContent({classname}: { classname?: string}) {
  const { post } = usePostCardContext();
  return <p className={twMerge("text-gray-500", classname)}>{post.postContent}</p>;
};

PostCard.Author = function PostCardAuthor({classname}: { classname?: string}) {
  const { post } = usePostCardContext();

  return <p className={twMerge("text-gray-600", classname)}>{post.postAuthor}</p>;
};

PostCard.Buttons = function PostCardButtons() {
  return (
    <div className="flex items-center gap-4">
      <button className="bg-blue-800 text-white p-2 rounded-md">
        Button01
      </button>
      <button className="bg-blue-800 text-white p-2 rounded-md">
        Button02
      </button>
    </div>
  );
};
