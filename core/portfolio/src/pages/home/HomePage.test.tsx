/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";

test("should load the description", () => {
  render(<HomePage />);
  expect(screen.getByText(`Kevin`)).toBeInTheDocument();
  expect(screen.getByText(`full stack software engineer`)).toBeInTheDocument();
  expect(screen.getByText(`design`)).toBeInTheDocument();

});
