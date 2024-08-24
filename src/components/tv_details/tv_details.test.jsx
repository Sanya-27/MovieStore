import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import DetailsTV from "./DetailsTV";
import mockTVShowData from "./tv_details_mock_data";

jest.mock("axios");

const mockAPIResponse = {
  data: mockTVShowData,
};

describe("DetailsTV Component Tests", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue(mockAPIResponse);
  });

  test("should display loading initially", () => {
    render(
      <MemoryRouter initialEntries={["/detailsTV/94997"]}>
        <Routes>
          <Route path="/detailsTV/:id" element={<DetailsTV />} />
        </Routes>
      </MemoryRouter>
    );
    expect(screen.getByText("Loading...")).toBeInTheDocument();
  });

  test("should render the details page", async () => {
    render(
      <MemoryRouter initialEntries={["/detailsTV/94997"]}>
        <Routes>
          <Route path="/detailsTV/:id" element={<DetailsTV />} />
        </Routes>
      </MemoryRouter>
    );
    const linkElement = await screen.findByTestId("TV-Details");
    expect(linkElement).toBeInTheDocument();
  });
  test("should render the title", async () => {
    render(
      <MemoryRouter initialEntries={["/detailsTV/94997"]}>
        <Routes>
          <Route path="/detailsTV/:id" element={<DetailsTV />} />
        </Routes>
      </MemoryRouter>
    );
    const linkElement = await screen.findByTestId("title");
    expect(linkElement).toBeInTheDocument();
  });
  test("should render the overview", async () => {
    render(
      <MemoryRouter initialEntries={["/detailsTV/94997"]}>
        <Routes>
          <Route path="/detailsTV/:id" element={<DetailsTV />} />
        </Routes>
      </MemoryRouter>
    );
    const linkElement = await screen.findByTestId("overview");
    expect(linkElement).toBeInTheDocument();
  });
});
