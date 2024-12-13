import { getMovieDetails } from "../data";

global.fetch = jest.fn();

describe("getMovieDetails", () => {
  it("should fetch inspection data by report number from getMovieDetails", async () => {
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

    const data = await getMovieDetails("12345");

    expect(fetch).toHaveBeenCalledWith(expect.anything(), {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    expect(data).toEqual(mockData);
  });

  it("should return an empty object when getMovieDetails fetch fails", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({}),
    });

    await expect(getMovieDetails("12345")).rejects.toThrow();
  });
});
