const MOCK_TV_DATA = require("../tv_mock_data");

describe("Search Page Tests - TV Shows", () => {
  describe("TV Data Tests", () => {
    test("should check the original name of the first TV show", () => {
      expect(MOCK_TV_DATA.results[0].original_name).toBe("House of the Dragon");
    });

    test("should check the first air date of the first TV show", () => {
      expect(MOCK_TV_DATA.results[0].first_air_date).toBe("2022-08-21");
    });

    test("should verify the vote_average of the first TV show is a number", () => {
      expect(typeof MOCK_TV_DATA.results[0].vote_average).toBe("number");
    });

    test("should verify the genre_ids of the first TV show is an array", () => {
      expect(Array.isArray(MOCK_TV_DATA.results[0].genre_ids)).toBe(true);
    });

    test("should verify the backdrop_path of the first TV show is a string", () => {
      expect(typeof MOCK_TV_DATA.results[0].backdrop_path).toBe("string");
    });
  });

  describe("General Data Structure Tests", () => {
    test("should check the page property is a number", () => {
      expect(typeof MOCK_TV_DATA.page).toBe("number");
    });

    test("should verify results is an array", () => {
      expect(Array.isArray(MOCK_TV_DATA.results)).toBe(true);
    });

    test("should verify the length of results is greater than 0", () => {
      expect(MOCK_TV_DATA.results.length).toBeGreaterThan(0);
    });
  });
});
