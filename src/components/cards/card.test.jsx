import mockData from "./cards_mock_data";
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import Cards from "./Cards";
const mockImageBaseURL = "https://image.tmdb.org/t/p";

describe("Cards Component Tests", () => {
  test("should display the movie title correctly", () => {
    render(
      <MemoryRouter>
        <Cards data={mockData} IMAGE={mockImageBaseURL} type="movie" />
      </MemoryRouter>
    );
    expect(screen.getByText("Inside Out 2")).toBeInTheDocument();
  });

  test("should use default poster image if poster_path is not provided", () => {
    const dataWithoutPoster = { ...mockData, poster_path: null };
    render(
      <MemoryRouter>
        <Cards data={dataWithoutPoster} IMAGE={mockImageBaseURL} type="movie" />
      </MemoryRouter>
    );
    const imgElement = screen.getByRole("img");
    expect(imgElement).toHaveAttribute(
      "src",
      `${mockImageBaseURL}/w200/a8LZTIQfGc75djZU4o3FsnstpwP.jpg`
    );
  });

  test("should display the rating correctly", () => {
    render(
      <MemoryRouter>
        <Cards data={mockData} IMAGE={mockImageBaseURL} type="movie" />
      </MemoryRouter>
    );
    expect(screen.getByText(/Rating: 8.2/)).toBeInTheDocument();
  });

  test("should display release date correctly", () => {
    render(
      <MemoryRouter>
        <Cards data={mockData} IMAGE={mockImageBaseURL} type="movie" />
      </MemoryRouter>
    );
    expect(screen.getByText("Release Date: 2024-01-01")).toBeInTheDocument();
  });

  test("should display overview correctly", () => {
    render(
      <MemoryRouter>
        <Cards data={mockData} IMAGE={mockImageBaseURL} type="movie" />
      </MemoryRouter>
    );
    const overviewPart = "Teenager Riley's mind headquarters";
    expect(screen.getByText(new RegExp(overviewPart, "i"))).toBeInTheDocument();
  });
});
