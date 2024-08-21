import { useContext } from "react";
import { postCardContext } from "../context";

export function usePostCardContext() {
  const context = useContext(postCardContext);
  if (!context) {
    return "Post context is not available";
  }

  return context;
}
