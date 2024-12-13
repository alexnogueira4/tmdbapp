import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Page from "../page";
import { resolvedComponent } from "@/app/lib/test-helpers";

global.fetch = jest.fn();

describe("Details Page", () => {
  const mockData = {
    adult: false,
    backdrop_path: "string",
    belongs_to_collection: "string",
    budget: 10,
    genres: [],
    homepage: "string",
    id: 10,
    imdb_id: "string",
    original_language: "string",
    original_title: "string",
    overview: "string",
    popularity: 10,
    poster_path: "string",
    production_companies: [],
    production_countries: [],
    release_date: "string",
    revenue: 10,
    runtime: 10,
    spoken_languages: [],
    status: "string",
    tagline: "string",
    title: "string",
    video: false,
    vote_average: 10,
    vote_count: 10,
  };

  (fetch as jest.Mock).mockResolvedValue({
    ok: true,
    json: async () => mockData,
  });

  it("should render the Page and have the correct className", async () => {
    const PageResolved = await resolvedComponent(Page, {
      params: { movieId: "12345" },
    });
    render(<PageResolved />);

    const PageDiv = screen.getByTestId("movie-page");

    expect(PageDiv).toBeInTheDocument();
    expect(PageDiv).toHaveClass("movie-page");
  });
});
