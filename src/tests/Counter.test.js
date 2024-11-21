// Import necessary React testing library helpers
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// Import the Counter component
import Counter from "../components/Counter.js";

beforeEach(() => {
  // Render the Counter component before each test
  render(<Counter />);
});

test("renders counter message", () => {
  // Test if the counter message is displayed
  const counterMessage = screen.getByText(/counter/i);
  expect(counterMessage).toBeInTheDocument();
});

test("should render initial count with value of 0", () => {
  // Test if the initial count is 0
  const countValue = screen.getByTestId("count");
  expect(countValue).toHaveTextContent("0");
});

test("clicking + increments the count", async () => {
  // Test if the count increments on clicking the + button
  const incrementButton = screen.getByText("+");
  const countValue = screen.getByTestId("count");

  await userEvent.click(incrementButton);
  expect(countValue).toHaveTextContent("1");

  await userEvent.click(incrementButton);
  expect(countValue).toHaveTextContent("2");
});

test("clicking - decrements the count", async () => {
  // Test if the count decrements on clicking the - button
  const decrementButton = screen.getByText("-");
  const countValue = screen.getByTestId("count");

  await userEvent.click(decrementButton);
  expect(countValue).toHaveTextContent("-1");

  await userEvent.click(decrementButton);
  expect(countValue).toHaveTextContent("-2");
});

