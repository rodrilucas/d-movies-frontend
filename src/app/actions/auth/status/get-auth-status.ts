"use server";

import { getToken } from "../token/get-token";

export async function getAuthStatus() {
  const token = await getToken();
  if (token) {
    return true;
  }
  return false;
}
