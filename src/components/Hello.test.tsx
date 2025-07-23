import { render, screen } from "@testing-library/react";
import { Hello } from "./Hello";
import "@testing-library/jest-dom";

it('renders "Hello World!"', () => {
  render(<Hello />);
  const myElement = screen.getByText("Hello World!");
  expect(myElement).toBeInTheDocument();
});
