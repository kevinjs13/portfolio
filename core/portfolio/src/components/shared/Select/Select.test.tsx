/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Select from ".";
import DefaultThemeStyles from "../../../styles/theme.styles";
import { ThemeProvider } from "styled-components";

test("should load the text", async () => {
  render(
    <ThemeProvider theme={DefaultThemeStyles}>
      <Select
        onChange={function (event: React.ChangeEvent<HTMLSelectElement>): void {
          throw new Error("Function not implemented.");
        }}
      />
    </ThemeProvider>
  );

  // expect(screen.getByText('This is a default react component')).toBeInTheDocument();
});
