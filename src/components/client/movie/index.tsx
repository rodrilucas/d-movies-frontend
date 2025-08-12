"use client";

import styles from "./movie.module.scss";
import Image from "next/image";
import type { Movie as MovieType } from "@/types";
import { useCircleAnimation } from "@/hooks/use-circle-animation";
import { genres } from "@/utils/data";

type MovieProps = {
  movie: MovieType;
};

export function Movie({ movie }: MovieProps) {
  const { progress, circumference } = useCircleAnimation(
    movie.vote_average,
    1.2
  );

  const genreMap = Object.fromEntries(genres.map((g) => [g.id, g.name]));

  const movieGenres = movie.genre_ids.map((id) => genreMap[id]);

  let colorClass = styles.red;
  if (movie.vote_average * 10 >= 60) colorClass = styles.green;
  else if (movie.vote_average * 10 >= 40) colorClass = styles.yellow;
  else if (movie.vote_average * 10 >= 30) colorClass = styles.orange;

  return (
    <div className={styles.movie}>
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        width={400}
        height={600}
        priority
      />
      <div className={styles.info}>
        <div className={styles.title}>
          <h2>{movie.title}</h2>
          <span>({new Date(movie.release_date).getFullYear()})</span>
        </div>

        <div className={styles.original_title}>
          <h2>
            <span>Título original: </span>
            {movie.original_title}
          </h2>
        </div>

        <div className={styles.genres}>
          {movieGenres.map((g, idx) => (
            <span key={idx}>{g}</span>
          ))}
        </div>

        <div className={styles.overview}>
          <h3>Sinopse</h3>
          <p>{movie.overview}</p>
        </div>

        <div className={styles.original_language}>
          <h2>
            <span>Linguagem original: </span>
            {movie.original_language}
          </h2>
        </div>

        <div className={styles.score}>
          <div className={`${styles.circle} ${colorClass}`}>
            <svg viewBox="0 0 36 36">
              <path
                stroke="currentColor"
                strokeWidth="4"
                fill="none"
                opacity="0.2"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
              <path
                stroke="currentColor"
                strokeWidth="4"
                strokeDasharray={`${progress}, ${circumference}`}
                strokeLinecap="round"
                fill="none"
                d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 
                   a 15.9155 15.9155 0 0 1 0 -31.831"
              />
            </svg>
            <div>{movie.vote_average.toFixed(1)}</div>
          </div>
          <h3>Avaliações dos usuários</h3>
        </div>
      </div>
    </div>
  );
}
