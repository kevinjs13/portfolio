/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import HomePage from "./HomePage";
import { ThemeProvider } from "styled-components";
import DefaultThemeStyles from "../../styles/theme.styles";

test("should load the description", () => {
  render(
    <ThemeProvider theme={DefaultThemeStyles}>
      <HomePage />
    </ThemeProvider>
  );
  expect(screen.getByText(`Kevin`)).toBeInTheDocument();
  expect(screen.getByText(`full stack software engineer`)).toBeInTheDocument();
  expect(screen.getByText(`design`)).toBeInTheDocument();
});
