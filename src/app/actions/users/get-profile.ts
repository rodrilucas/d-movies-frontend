"use server";

import { getToken } from "../auth/token/get-token";

export type GetProfileResponse = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

export async function getProfile(): Promise<GetProfileResponse> {
  const token = await getToken();
  const response = await fetch("http://localhost:3333/users/profile", {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.json();
}
