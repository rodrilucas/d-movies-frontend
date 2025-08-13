"use server";

import { env } from "@/env";
import { redirect } from "next/navigation";

export type UserRegisterParams = {
  data: {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  };
};

export async function register({ data }: UserRegisterParams) {
  const response = await fetch(`${env.BASE_URL}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  if (!response.ok) {
    return response.json();
  }

  if (response.status === 201) {
    redirect("/movies");
  }
}
