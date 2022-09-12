import { render, screen } from "@testing-library/react";
import { act } from "react-dom/test-utils";
import App from "./App";

test("renders without error", () => {
  render(<App />);
});

test("render number of clicks text correctly", () => {
  //Arrange & Act
  render(<App />);

  //Assert
  expect(
    screen.getByText(/0 number of clicks made on child Button/i)
  ).toBeInTheDocument();
});

test("render number of clicks correctly after button click", () => {
  //Arrange
  render(<App />);
  const clickButton = screen.getByRole("button", { name: /child button/i });

  //Act
  act(() => {
    clickButton.click();
  });
  //Assert
  expect(
    screen.getByText(/1 number of clicks made on child Button/i)
  ).toBeInTheDocument();
});
