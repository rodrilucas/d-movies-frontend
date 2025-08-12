"use server";

import { Movie } from "@/types";
import { redirect } from "next/navigation";

export type GetByIdResponse = {
  movie: Movie;
};

type GetByIdParams = {
  id: string;
};

export async function getById({ id }: GetByIdParams): Promise<GetByIdResponse> {
  const response = await fetch(`http://localhost:3333/movies/${id}`, {
    method: "GET",
  });

  if (!response.ok) {
    redirect("/movies")
  }
  
  return response.json();
}
