"use server";

import { env } from "@/env";
import { ApiResponse } from "@/types";

export type GetAllResponse = ApiResponse;

type GetAllParams = {
  page?: number;
  limit?: number;
};

export async function getAll({ page, limit }: GetAllParams): Promise<GetAllResponse> {
  const response = await fetch(
    `${env.BASE_URL}/movies?sort=popularity.desc&page=${page}&limit=${limit}`
  );
  return response.json();
}
