import { Dispatch, SetStateAction } from "react";

export type Context = {
  isOpenLogin: boolean;
  isOpenRegister: boolean;
  setIsOpenLogin: Dispatch<SetStateAction<boolean>>;
  setIsOpenRegister: Dispatch<SetStateAction<boolean>>;
};

export type ValidationErrors<T extends string = string> = {
  message: string;
  errors: {
    [K in T]?: string[];
  };
};

export type Movie = {
  id: number;
  title: string;
  overview: string;
  release_date: string;
  poster_path: string | null;
  vote_average: number;
  adult: boolean;
  backdrop_path: string | null;
  genre_ids: number[];
  original_language: string;
  original_title: string;
  popularity: number;
  video: boolean;
  vote_count: number;
};

export type ApiResponse = {
  currentPage: number;
  totalPages: number;
  limit: number;
  totalResults: number;
  movies: Movie[];
};
