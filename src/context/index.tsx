import { createContext } from "react";
import { postCardProps } from "../types";

export const postCardContext = createContext<postCardProps | undefined>(
  undefined
);
