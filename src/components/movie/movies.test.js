const dotenv = require("dotenv");
dotenv.config();

// import { describe, expect, test } from "@jest/globals";

const MOCK_MOVIE_DATA = require("../movies_mock_data");

describe("Search Page Tests", () => {
  describe("Movie Data Tests", () => {
    test("should check the original title of the first movie", () => {
      expect(MOCK_MOVIE_DATA.results[0].original_title).toBe("Inside Out 2");
    });

    test("should check the release date of the first movie", () => {
      expect(MOCK_MOVIE_DATA.results[0].release_date).toBe("2024-06-11");
    });

    test("should verify the vote_average of the first movie is a number", () => {
      expect(typeof MOCK_MOVIE_DATA.results[0].vote_average).toBe("number");
    });

    test("should verify the genre_ids of the first movie is an array", () => {
      expect(Array.isArray(MOCK_MOVIE_DATA.results[0].genre_ids)).toBe(true);
    });

    test("should verify the adult property of the first movie is false", () => {
      expect(MOCK_MOVIE_DATA.results[0].adult).toBe(false);
    });

    test("should verify the backdrop_path of the first movie is a string", () => {
      expect(typeof MOCK_MOVIE_DATA.results[0].backdrop_path).toBe("string");
    });

    test("should check the popularity of the first movie is greater than 5000", () => {
      expect(MOCK_MOVIE_DATA.results[0].popularity).toBeGreaterThan(5000);
    });
  });

  describe("General Data Structure Tests", () => {
    test("should check the page property is a number", () => {
      expect(typeof MOCK_MOVIE_DATA.page).toBe("number");
    });

    test("should verify results is an array", () => {
      expect(Array.isArray(MOCK_MOVIE_DATA.results)).toBe(true);
    });

    test("should verify the length of results is greater than 0", () => {
      expect(MOCK_MOVIE_DATA.results.length).toBeGreaterThan(0);
    });
  });
});
