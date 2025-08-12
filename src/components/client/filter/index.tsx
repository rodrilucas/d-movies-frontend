"use client";

import styles from "./filter.module.scss";
import Button from "@/components/server/button";
import { languages, sortOptions } from "@/utils/data";
import { Range } from "./range";
import { genres as genresArr } from "@/utils/data";
import { FormEvent, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

export default function Filter() {
  const router = useRouter();
  const params = useSearchParams();

  const [sort, setSort] = useState(() => params.get("sort") ?? "");
  const [language, setLanguage] = useState(() => params.get("language") ?? "");
  const [genres, setGenres] = useState<number[]>(
    () => params.get("genre")?.split(",").map(Number).filter(Boolean) ?? []
  );
  const [startYear, setStartYear] = useState(
    () => params.get("startYear") ?? ""
  );
  const [endYear, setEndYear] = useState(() => params.get("endYear") ?? "");
  const [rating, setRating] = useState(() => Number(params.get("rating")) ?? 0);
  const [avaliation, setAvaliation] = useState(
    () => Number(params.get("avaliation")) ?? 0
  );

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const params = new URLSearchParams();

    if (sort) params.set("sort", sort);
    if (language) params.set("language", language);
    if (genres.length > 0) params.set("genre", genres.toString());
    if (startYear) params.set("startYear", startYear);
    if (endYear) params.set("endYear", endYear);
    if (rating) params.set("rating", rating.toString());
    if (avaliation) params.set("avaliation", avaliation.toString());

    params.set("page", "1");

    router.push(`/movies?${params.toString()}`);
  };

  const handleChangeGenre = (g: number) => {
    setGenres((prevState) =>
      prevState.includes(g)
        ? prevState.filter((gender) => gender != g)
        : [...prevState, g]
    );
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <fieldset className={styles.sort}>
        <label htmlFor="sort">Ordenar por</label>
        <select
          name="sort"
          id="sort"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          {sortOptions.map(([value, label]) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>
      </fieldset>

      <fieldset className={styles.gender}>
        <legend>Gêneros</legend>
        <ul className={styles.genres}>
          {genresArr.map((genre) => (
            <li key={genre.id}>
              <label>
                <input
                  type="checkbox"
                  value={genre.id}
                  className={styles.input}
                  name="genre"
                  onChange={() => handleChangeGenre(genre.id)}
                  checked={genres.includes(genre.id)}
                />
                <span className={styles.button}>{genre.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </fieldset>

      <div className={styles.years}>
        <div>
          <fieldset className={styles.start}>
            <label htmlFor="startYear">Ano inicial</label>
            <input
              type="date"
              id="startYear"
              name="startYear"
              min="1880-01-01"
              value={startYear}
              onChange={(e) => setStartYear(e.currentTarget.value)}
            />
            <svg
              className="svg-date"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </fieldset>
        </div>
        <div>
          <fieldset className={styles.end}>
            <label htmlFor="endYear">Ano final</label>
            <input
              type="date"
              id="endYear"
              name="endYear"
              min="1890-01-01"
              value={endYear}
              onChange={(e) => setEndYear(e.currentTarget.value)}
            />
            <svg
              className="svg-date"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </fieldset>
        </div>

        <fieldset className={styles.language}>
          <label htmlFor="language">Idioma</label>
          <select
            id="language"
            name="language"
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
          >
            {languages.map((lang) => (
              <option key={lang.iso_639_1} value={lang.iso_639_1}>
                {lang.name}
              </option>
            ))}
          </select>
        </fieldset>
      </div>

      <Range
        input={{
          id: "rating",
          name: "rating",
          max: "10",
          min: "0",
          step: "0.5",
          defaultValue: rating.toString(),
          onChange: (e) => setRating(Number(e.currentTarget.value)),
        }}
        label={{ htmlFor: "rating", name: "Pontuação do usuário" }}
      />

      <Range
        input={{
          id: "avaliation",
          name: "avaliation",
          min: "0",
          max: "5000",
          step: "50",
          defaultValue: avaliation.toString(),
          onChange: (e) => setAvaliation(Number(e.currentTarget.value)),
        }}
        label={{ htmlFor: "avaliation", name: "Votos mínimos do usuário" }}
      />

      <div className={styles.button}>
        <Button type="submit">Buscar</Button>
      </div>
    </form>
  );
}
