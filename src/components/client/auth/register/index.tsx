"use client";

import styles from "./register-redirect.module.scss";
import { use } from "react";
import { MoviesContext } from "@/context/MoviesContext";

export default function RegisterRedirect() {
  const { setIsOpenLogin, setIsOpenRegister } = use(MoviesContext);

  const handleClick = () => {
    setIsOpenLogin(true);
    setIsOpenRegister(false);
  };

  return (
    <span className={styles.redirect}>
      Já tem uma conta?
      <button onClick={handleClick}>Faça o seu login</button>
    </span>
  );
}
