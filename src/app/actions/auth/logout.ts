"use server";

import { cookies } from "next/headers";
import { getAuthStatus } from "./status/get-auth-status";
import { redirect } from "next/navigation";

export async function logout() {
  const promisseCookies = await cookies();
  const isLoggedIn = await getAuthStatus();

  if (isLoggedIn) {
    promisseCookies.delete("token");
  }
  
  redirect("/");
}
