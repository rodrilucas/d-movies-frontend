import { Movie } from "@/types";
import { Card } from "../../client/card";
import { Skeleton } from "../skeleton";
import styles from "./movies-list.module.scss";

type MoviesListProps = {
  isLoading: boolean;
  movies: Movie[];
};

export default function MoviesList({ movies, isLoading }: MoviesListProps) {
  return (
    <div className={styles.movies}>
      {isLoading && <Skeleton quantity={20} />}
      {movies?.map((movie) => (
        <Card key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
