import type { Context } from "@/types";
import { createContext } from "react";

export const MoviesContext = createContext<Context>({
  isOpenLogin: false,
  isOpenRegister: false,
  setIsOpenLogin: () => {},
  setIsOpenRegister: () => {},
});
