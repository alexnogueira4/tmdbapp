import React from "react";
import { getMovieDetails } from "@/app/lib/data";
import MovieDetails from "@/app/ui/components/MovieDetails";

interface MovieDetailPageProps {
  params: Promise<{
    movieId: string;
  }>;
}
const MovieDetailPage: React.FC<MovieDetailPageProps> = async (props) => {
  const params = await props.params;
  const movieId = await params.movieId;
  const movie = await getMovieDetails(movieId);

  return (
    <div className="movie-page" data-testid="movie-page">
      <MovieDetails movie={movie} />
    </div>
  );
};

export default MovieDetailPage;
