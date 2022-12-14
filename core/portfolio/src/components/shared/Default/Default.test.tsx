/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Default from ".";
import DefaultThemeStyles from "../../../styles/theme.styles";
import { ThemeProvider } from "styled-components";

test("should load the text", async () => {
  render(
    <ThemeProvider theme={DefaultThemeStyles}>
      <Default />
    </ThemeProvider>
  );

  expect(
    screen.getByText("This is a default react component")
  ).toBeInTheDocument();
});
