import { getPopMovies } from "../data";

global.fetch = jest.fn();

describe("API Functions", () => {
  it("should fetch inspection data by report 10 from getPopMovies", async () => {
    const mockData = {
      results: [
        {
          adult: false,
          backdrop_path: "string",
          genre_ids: [10],
          id: 10,
          original_language: "string",
          original_title: "string",
          overview: "string",
          popularity: 10,
          poster_path: "string",
          release_date: "string",
          title: "string",
          video: false,
          vote_average: 10,
          vote_count: 10,
        },
      ],
    };

    (fetch as jest.Mock).mockResolvedValue({
      ok: true,
      json: async () => mockData,
    });

    const data = await getPopMovies();

    expect(fetch).toHaveBeenCalledWith(expect.anything(), {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });

    expect(data).toEqual(mockData.results);
  });

  it("should return an empty object when getPopMovies fetch fails", async () => {
    (fetch as jest.Mock).mockResolvedValueOnce({
      ok: false,
      json: async () => ({}),
    });

    await expect(getPopMovies()).rejects.toThrow();
  });
});
