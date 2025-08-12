"use server";

import { ApiResponse } from "@/types";

export type GetAllResponse = ApiResponse;

type GetAllParams = {
  page?: number;
  limit?: number;
};

export async function getAll({ page, limit }: GetAllParams): Promise<GetAllResponse> {
  const response = await fetch(
    `http://localhost:3333/movies?sort=popularity.desc&page=${page}&limit=${limit}`
  );
  return response.json();
}
