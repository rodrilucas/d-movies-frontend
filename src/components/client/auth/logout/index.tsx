"use client";

import { use, useTransition } from "react";
import { logout } from "@/app/actions/auth/logout";
import Button from "../../../server/button";
import { MoviesContext } from "@/context/MoviesContext";

export function LogoutButton() {
  const [isPending, startTransition] = useTransition();
  const { setIsOpenLogin } = use(MoviesContext);

  async function handleLogout() {
    setIsOpenLogin(false);

    startTransition(async () => {
      await logout();
    });
  }

  return (
    <Button onClick={handleLogout} disabled={isPending}>
      {isPending ? "Saindo..." : "Sair"}
    </Button>
  );
}
