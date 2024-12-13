import MovieCard from "../MovieCard";
import styles from "./index.module.css";
import { getPopMovies } from "@/app/lib/data";

const MoviesGrid: React.FC = async () => {
  const movies = await getPopMovies();

  return (
    <div className={styles.moviesGrid}>
      {movies.map((movie) => (
        <MovieCard
          key={movie.id}
          movie={movie}
          redirectTo={`/movie/${movie.id}`}
        />
      ))}
    </div>
  );
};

export default MoviesGrid;
