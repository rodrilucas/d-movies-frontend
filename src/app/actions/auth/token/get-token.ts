"use server";

import { cookies } from "next/headers";

export async function getToken() {
  const promisseCookies = await cookies();
  const token = promisseCookies.get("token");

  if (token) {
    return token.value;
  }
}
