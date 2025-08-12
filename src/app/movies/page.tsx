import styles from "./page.module.scss";
import { search } from "../actions/movies/search";
import { getAll } from "../actions/movies/get-all";
import { getByFilter } from "../actions/movies/get-by-filter";
import { ApiResponse } from "@/types";
import MoviesListPagination from "@/components/server/movies-list-pagination";
import Filter from "@/components/client/filter";
import { dateBR } from "@/utils/date-br";

export type SearchParams = {
  page?: string;
  query?: string;
  sort?: string;
  genre?: string | string[];
  startYear?: string;
  endYear?: string;
  language?: string;
  rating?: string;
  avaliation?: string;
};

export default async function MoviesPage({
  searchParams,
}: {
  searchParams: Promise<SearchParams>;
}) {
  const params = await searchParams;

  const page = Number(params.page ?? "1");
  const sort = params.sort ?? "";
  const query = params.query ?? "";
  const startYear = params.startYear ? dateBR(params.startYear) : "";
  const endYear = params.endYear ? dateBR(params.endYear) : "";
  const language = params.language ?? "";
  const rating = params.rating ? Number(params.rating) : 0;
  const avaliation = params.avaliation ? Number(params.avaliation) : 0;

  const genres = params.genre
    ? (Array.isArray(params.genre) ? params.genre.join(",") : params.genre)
        .split(",")
        .map((g) => Number(g))
        .filter((n) => !isNaN(n))
    : [];

  const isFilter =
    sort ||
    genres.length ||
    startYear ||
    endYear ||
    language ||
    rating > 0 ||
    avaliation > 0;

  let moviesData: ApiResponse;

  if (query) {
    moviesData = await search({ query, page });
  } else if (isFilter) {
    moviesData = await getByFilter({
      data: {
        sort,
        genres,
        startYear,
        endYear,
        language,
        rating,
        avaliation,
        page,
        keyword: query,
      },
    });
  } else {
    moviesData = await getAll({ page, limit: 20 });
  }

  const { movies, totalResults, totalPages, limit } = moviesData;

  return (
    <section className={styles.section}>
      <div className={styles.filter}>
        <Filter />
      </div>
      <div className={styles.movies}>
        <MoviesListPagination
          movies={movies}
          totalPages={totalPages}
          pageSize={limit}
          totalItems={totalResults}
          isLoading={false}
        />
      </div>
    </section>
  );
}
