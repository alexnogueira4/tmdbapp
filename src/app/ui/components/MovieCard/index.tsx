import Link from "next/link";
import Image from "next/image";

import styles from "./index.module.css";
import { Movie } from "@/app/lib/definitions";

interface MovieCardProps {
  movie: Movie;
  redirectTo: string;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie, redirectTo }) => {
  return (
    <Link key={redirectTo} href={redirectTo} className={styles.movieCard}>
      <Image
        src={`https://image.tmdb.org/t/p/w185/${movie.poster_path}`}
        width={185}
        height={278}
        alt={movie.title}
        title={movie.title}
      />
    </Link>
  );
};

export default MovieCard;
