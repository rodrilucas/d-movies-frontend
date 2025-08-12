"use client";

import { useState, ReactNode } from "react";
import { MoviesContext } from "./MoviesContext";

const Provider = ({ children }: { children: ReactNode }) => {
  const [isOpenLogin, setIsOpenLogin] = useState(false);
  const [isOpenRegister, setIsOpenRegister] = useState(false);

  const valuesToShare = {
    isOpenLogin,
    isOpenRegister,
    setIsOpenLogin,
    setIsOpenRegister,
  };

  return (
    <MoviesContext.Provider value={valuesToShare}>
      {children}
    </MoviesContext.Provider>
  );
};

export { Provider };
export default MoviesContext;
