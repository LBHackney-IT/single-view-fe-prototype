import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/Single View Front-End Prototype/i);
  expect(linkElement).toBeInTheDocument();
});
