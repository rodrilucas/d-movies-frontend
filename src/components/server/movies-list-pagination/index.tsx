import PaginationClient from "../../client/pagination";
import MoviesList from "../movieslist";
import { Fragment } from "react";
import { Movie } from "@/types";

type MoviesListPaginationProps = {
  pageSize: number;
  totalItems: number;
  totalPages: number;
  isLoading: boolean;
  movies: Movie[];
};

export default function MoviesListPagination({
  pageSize,
  totalItems,
  totalPages,
  isLoading,
  movies,
}: MoviesListPaginationProps) {
  return (
    <Fragment>
      <MoviesList movies={movies} isLoading={isLoading} />
      <PaginationClient
        pageSize={pageSize}
        totalItems={totalItems}
        totalPages={totalPages}
      />
    </Fragment>
  );
}
