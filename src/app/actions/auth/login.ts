"use server";

import { env } from "@/env";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export type UserLoginParams = {
  data: {
    email: string;
    password: string;
  };
};

export async function login({ data }: UserLoginParams) {
  const response = await fetch(`${env.BASE_URL}/auth/session`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
    cache: "no-store",
  });

  if (!response.ok) {
    return await response.json();
  }

  if (response.status === 200) {
    const { token } = await response.json();
    const promisseCookies = await cookies();

    promisseCookies.set("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24,
    });

    redirect("/");
  }
}
