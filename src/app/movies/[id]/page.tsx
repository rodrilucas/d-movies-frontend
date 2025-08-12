import styles from "./page.module.scss";
import { getById } from "@/app/actions/movies/get-by-id";
import { Movie } from "@/components/client/movie";
import { redirect } from "next/navigation";

type Params = {
  id: string;
};

export default async function MoviePage({
  params,
}: {
  params: Promise<Params>;
}) {
  const { id } = await params;

  if (isNaN(Number(id))) {
    redirect("/movies");
  }

  const { movie } = await getById({ id });
  
  return (
    <div
      className={styles.background}
      style={{
        backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Movie movie={movie} />
    </div>
  );
}
