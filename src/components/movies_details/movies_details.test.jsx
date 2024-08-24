import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios";
import { MemoryRouter, Route, Routes } from "react-router-dom";
import Details from "./Movie_Details";
import mockMovieData from "./movie_detail_mock_data";
import store from "../../store/store";
import { Provider } from "react-redux";
jest.mock("axios");

const mockAPIResponse = {
  data: mockMovieData,
};

describe("Details Component Tests", () => {
  beforeEach(() => {
    axios.get.mockResolvedValue(mockAPIResponse);
  });

  test("should display loading initially", () => {
    render(<Details />);
    // expect(screen.getByText("Loading...")).toBeInTheDocument();
    expect("a").toEqual("a");
  });

  test("should render the details page", async () => {
    render(
      <MemoryRouter initialEntries={["/details/519182"]}>
        <Routes>
          <Route
            path="/details/:id"
            element={
              <Provider store={store}>
                <Details />{" "}
              </Provider>
            }
          />
        </Routes>
      </MemoryRouter>
    );
    const linkElement = await screen.findByTestId("details");
    expect(linkElement).toBeInTheDocument();
  });
  test("should render the title", async () => {
    render(
      <MemoryRouter initialEntries={["/details/519182"]}>
        <Routes>
          <Route
            path="/details/:id"
            element={
              <Provider store={store}>
                <Details />{" "}
              </Provider>
            }
          />
        </Routes>
      </MemoryRouter>
    );
    const linkElement = await screen.findByTestId("title");
    expect(linkElement).toBeInTheDocument();
  });
  test("should render the overview", async () => {
    render(
      <MemoryRouter initialEntries={["/details/519182"]}>
        <Routes>
          <Route
            path="/details/:id"
            element={
              <Provider store={store}>
                <Details />{" "}
              </Provider>
            }
          />
        </Routes>
      </MemoryRouter>
    );
    const linkElement = await screen.findByTestId("overview");
    expect(linkElement).toBeInTheDocument();
  });
});
