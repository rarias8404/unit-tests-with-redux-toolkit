import App from "../App";
import { render, screen, fireEvent } from "@testing-library/react";

test("renders logo in App component", async () => {
  expect.assertions(5);
  render(<App />);
  const viteLogo = screen.getByAltText("Vite logo");
  const reactLogo = screen.getByAltText("React logo");
  const button = screen.getByRole("button");
  expect(viteLogo).toBeInTheDocument();
  expect(reactLogo).toBeInTheDocument();
  expect(screen.getByText("count is 0")).toBeInTheDocument();
  fireEvent.click(button);
  expect(screen.queryByText("count is 0")).not.toBeInTheDocument();
  expect(screen.getByText("count is 1")).toBeInTheDocument();
});
