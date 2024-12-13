import Image from "next/image";
import { MovieDetail } from "@/app/lib/definitions";
import styles from "./index.module.css";

interface MovieDetailProps {
  movie: MovieDetail;
}

const MovieDetails: React.FC<MovieDetailProps> = ({ movie }) => {
  return movie ? (
    <div className={styles.movieDetails}>
      <div className={styles.movieTitle}>
        <h3>{movie.title}</h3>
      </div>
      <div className={styles.movieDetailsWrapper}>
        <div className={styles.detailsContent}>
          <Image
            src={`https://image.tmdb.org/t/p/w154${movie.poster_path}`}
            width={154}
            height={231}
            alt={movie.title}
          />
          <div className={styles.detailsInfo}>
            <p className={styles.releaseYear}>
              {movie.release_date.slice(0, 4)}
            </p>
            <p className={styles.runtime}>{movie.runtime} mins</p>
            <p className={styles.voteAverage}>
              <span>{movie.vote_average.toFixed(2)}</span>/10
            </p>
            <button className={styles.addFavorite}>Add to Favorite</button>
          </div>
        </div>
        <div className={styles.movieOverview}>
          <p>{movie.overview}</p>
        </div>
      </div>
    </div>
  ) : (
    <></>
  );
};

export default MovieDetails;
