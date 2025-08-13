"use server";

import { env } from "@/env";
import { ApiResponse } from "@/types";

type SearchResponse = ApiResponse;

type SearchParam = {
  query: string;
  page?: number;
};

export async function search({
  query,
  page,
}: SearchParam): Promise<SearchResponse> {
  const response = await fetch(
    `${env.BASE_URL}/movies/search?query=${query}&page=${page}`
  );
  return response.json();
}
