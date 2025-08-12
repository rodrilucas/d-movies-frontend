"use client";

import styles from "./card.module.scss";
import type { Movie } from "@/types";
import Image from "next/image";
import Link from "next/link";
import { useCircleAnimation } from "@/hooks/use-circle-animation";

type CardProps = {
  movie: Movie;
};

export function Card({ movie }: CardProps) {
  const { progress, circumference } = useCircleAnimation(movie.vote_average, 1.2);

  const movieDate = new Date(movie.release_date).toLocaleDateString("pt-br", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  let colorClass = styles.red;
  if (movie.vote_average * 10 >= 60) colorClass = styles.green;
  else if (movie.vote_average * 10 >= 40) colorClass = styles.yellow;
  else if (movie.vote_average * 10 >= 30) colorClass = styles.orange;

  return (
    <Link className={styles.card} href={`/movies/${movie.id}`}>
      <div className={styles.image}>
        {movie.poster_path ? (
          <Image
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            width={500}
            height={500}
            priority
          />
        ) : (
          <div className={styles.no_image}>Sem imagem disponível</div>
        )}

        <div className={`${styles.score} ${colorClass}`}>
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
          <div>{movie.vote_average ? movie.vote_average.toFixed(1) : 0}</div>
        </div>
      </div>

      <div className={styles.body}>
        <h2>{movie.title}</h2>
        <p>{movieDate}</p>
      </div>
    </Link>
  );
}
