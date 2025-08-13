"use server";

import { env } from "@/env";
import { ApiResponse } from "@/types";

export type GetByFilterResponse = ApiResponse;

type FilterFormData = {
  sort?: string;
  genres?: number[];
  startYear?: string;
  endYear?: string;
  language?: string;
  rating?: number;
  avaliation?: number;
  page: number;
  keyword?: string;
};

type GetByFilterParams = {
  data: FilterFormData;
};

export async function getByFilter({
  data,
}: GetByFilterParams): Promise<GetByFilterResponse> {
  const response = await fetch(`${env.BASE_URL}/movies`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  return response.json();
}
