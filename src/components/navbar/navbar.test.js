import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import Navbarr from "./Navbarr";

const mockNavigate = jest.fn();

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockNavigate,
}));

describe("Navbarr Component Tests", () => {
  test("should render Navbar with correct elements", () => {
    render(
      <MemoryRouter>
        <Navbarr />
      </MemoryRouter>
    );

    expect(screen.getByText("Movie Store")).toBeInTheDocument();

    expect(screen.getByText("Movie")).toBeInTheDocument();
    expect(screen.getByText("TV Shows")).toBeInTheDocument();
  });

  test("should not navigate if search input is empty", () => {
    render(
      <MemoryRouter>
        <Navbarr />
      </MemoryRouter>
    );

    const searchButton = screen.getByText("Search");

    fireEvent.click(searchButton);

    expect(mockNavigate).not.toHaveBeenCalled();
  });

  test("should have correct links", () => {
    render(
      <MemoryRouter>
        <Navbarr />
      </MemoryRouter>
    );

    const movieLink = screen.getByText("Movie").closest("a");
    expect(movieLink).toHaveAttribute("href", "/MovieStore/Movie");

    const tvLink = screen.getByText("TV Shows").closest("a");
    expect(tvLink).toHaveAttribute("href", "/MovieStore/TV");
  });
});
