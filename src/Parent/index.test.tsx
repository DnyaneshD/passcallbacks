import { render, screen } from "@testing-library/react";
import Parent from ".";

test("render without error", () => {
  render(<Parent />);
});

test("render number of clicks text and Child click button", () => {
  render(<Parent />);

  expect(
    screen.getByText(/0 number of clicks made on Child Button/i)
  ).toBeInTheDocument();

  expect(
    screen.getByRole("button", { name: /child button/i })
  ).toBeInTheDocument();
});
