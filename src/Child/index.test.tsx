import { render, screen } from "@testing-library/react";
import exp from "constants";
import Child from ".";

test("render without error", () => {
  render(<Child clickCallBack={() => {}} />);
});

test("should call callbackfunction when button is clicked", () => {
  //Arange
  const mockedFn = jest.fn();
  //Act
  render(<Child clickCallBack={mockedFn} />);
  screen.getByRole("button", { name: /child button/i }).click();

  //Assert
  expect(mockedFn).toBeCalled();
  expect(mockedFn).toHaveBeenCalledTimes(1);
});
