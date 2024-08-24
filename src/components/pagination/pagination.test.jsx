import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Pagination from "./Pagination";

describe("Pagination Component Tests", () => {
  const renderComponent = (current, totalPages) => {
    const handleClick = jest.fn();
    render(
      <Pagination
        current={current}
        handleClick={handleClick}
        totalPages={totalPages}
      />
    );
    return handleClick;
  };

  test("should render the correct range of pages", () => {
    renderComponent(1, 10);
    const pageButtons = screen.getAllByRole("button", { name: /\d+/ });
    expect(pageButtons).toHaveLength(5);
    expect(pageButtons[0]).toHaveTextContent("1");
    expect(pageButtons[4]).toHaveTextContent("5");
  });

  test("should navigate to the next range of pages", () => {
    const handleClick = renderComponent(1, 10);
    const nextButton = screen.getByRole("button", { name: ">" });
    fireEvent.click(nextButton);
    const pageButtons = screen.getAllByRole("button", { name: /\d+/ });
    expect(pageButtons[0]).toHaveTextContent("6");
    expect(pageButtons[4]).toHaveTextContent("10");
  });

  test("should navigate to the previous range of pages", () => {
    const handleClick = renderComponent(6, 10);
    const prevButton = screen.getByRole("button", { name: "<" });
    fireEvent.click(prevButton);
    const pageButtons = screen.getAllByRole("button", { name: /\d+/ });
    expect(pageButtons[0]).toHaveTextContent("1");
    expect(pageButtons[4]).toHaveTextContent("5");
  });

  test("should disable the previous button on the first range", () => {
    renderComponent(1, 10);
    const prevButton = screen.getByRole("button", { name: "<" });
    expect(prevButton).toBeDisabled();
  });

  test("should call handleClick with the correct page number", () => {
    const handleClick = renderComponent(1, 10);
    const pageButtons = screen.getAllByRole("button", { name: /\d+/ });
    fireEvent.click(pageButtons[1]);
    expect(handleClick).toHaveBeenCalledWith(2);
  });

  test("should update the range when current page changes", () => {
    const { rerender } = render(
      <Pagination current={1} handleClick={jest.fn()} totalPages={10} />
    );
    let pageButtons = screen.getAllByRole("button", { name: /\d+/ });
    expect(pageButtons[0]).toHaveTextContent("1");
    expect(pageButtons[4]).toHaveTextContent("5");

    rerender(
      <Pagination current={6} handleClick={jest.fn()} totalPages={10} />
    );
    pageButtons = screen.getAllByRole("button", { name: /\d+/ });
    expect(pageButtons[0]).toHaveTextContent("6");
    expect(pageButtons[4]).toHaveTextContent("10");
  });
});
