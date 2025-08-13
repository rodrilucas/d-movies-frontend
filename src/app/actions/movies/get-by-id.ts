"use server";

import { env } from "@/env";
import { Movie } from "@/types";
import { redirect } from "next/navigation";

export type GetByIdResponse = {
  movie: Movie;
};

type GetByIdParams = {
  id: string;
};

export async function getById({ id }: GetByIdParams): Promise<GetByIdResponse> {
  const response = await fetch(`${env.BASE_URL}/movies/${id}`, {
    method: "GET",
  });

  if (!response.ok) {
    redirect("/movies")
  }
  
  return response.json();
}
