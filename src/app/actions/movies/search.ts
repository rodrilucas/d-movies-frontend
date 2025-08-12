"use server";

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
    `http://localhost:3333/movies/search?query=${query}&page=${page}`
  );
  return response.json();
}
