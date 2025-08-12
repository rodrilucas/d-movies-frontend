"use client";

import { Fragment, use } from "react";
import { createPortal } from "react-dom";
import Button from "@/components/server/button";
import Login from "@/components/server/login";
import Register from "@/components/server/register";
import { MoviesContext } from "@/context/MoviesContext";

export default function LoginButton() {
  const { isOpenLogin, isOpenRegister, setIsOpenLogin, setIsOpenRegister } =
    use(MoviesContext);

  const openLogin = () => setIsOpenLogin(true);
  const closeLogin = () => setIsOpenLogin(false);

  const openRegister = () => {
    closeLogin();
    setIsOpenRegister(true);
  };
  
  const closeRegister = () => setIsOpenRegister(false);

  return (
    <Fragment>
      <Button onClick={openLogin}>Entrar</Button>

      {isOpenLogin &&
        createPortal(
          <Login onClose={closeLogin} onRedirect={openRegister} />,
          document.body
        )}

      {isOpenRegister &&
        createPortal(<Register onClose={closeRegister} />, document.body)}
    </Fragment>
  );
}
