import { Movie, MovieDetail } from "./definitions";

const BASE_URL = "https://api.themoviedb.org/";

export async function getMovieDetails(movieId: string): Promise<MovieDetail> {
  const url = new URL(
    `3/movie/${movieId}?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    `${BASE_URL}`,
  );

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      throw new Error("Failed to fetch movie data");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error retrieving movie data:", error);
    throw new Error("Error retrieving movies data");
  }
}

export async function getPopMovies(): Promise<Movie[]> {
  const url = new URL(
    `3/movie/popular?api_key=${process.env.NEXT_PUBLIC_API_KEY}`,
    `${BASE_URL}`,
  );

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    if (!response.ok) {
      throw new Error("Failed to fetch movie data");
    }

    const data = await response.json();
    return data.results;
  } catch (error) {
    console.error("Error retrieving movies data:", error);
    throw new Error("Error retrieving movies data");
  }
}
