/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import CardLink from ".";
import { IoAccessibilityOutline } from "react-icons/io5";
import { ThemeProvider } from "styled-components";
import DefaultThemeStyles from "../../styles/theme.styles";

const linkText = `Sample Button`;
const linkUrl = `www.google.com`;

describe(`Card Link component`, () => {
  it("should be a link", async () => {
    render(
      <ThemeProvider theme={DefaultThemeStyles}>
        <CardLink text={linkText} link={linkUrl} active />
      </ThemeProvider>
    );

    const links = await screen.findAllByRole("link");
    expect(links).toHaveLength(1);
  });

  it("should have a text based on prop", async () => {
    render(
      <ThemeProvider theme={DefaultThemeStyles}>
        <CardLink text={linkText} link={linkUrl} active />
      </ThemeProvider>
    );
    const link = await screen.findAllByRole("link", {
      name: linkText,
    });
    expect(link).toBeTruthy();
  });

  it("should have a link based on prop", async () => {
    render(
      <ThemeProvider theme={DefaultThemeStyles}>
        <CardLink text={linkText} link={linkUrl} active />
      </ThemeProvider>
    );
    const link = await screen.findByRole("link", {
      name: linkText,
    });

    expect(link).toHaveAttribute("href", linkUrl);
  });

  it("should have an icon if passed as props", async () => {
    render(
      <ThemeProvider theme={DefaultThemeStyles}>
        <CardLink
          text={linkText}
          link={linkUrl}
          icon={<IoAccessibilityOutline />}
          active
        />
      </ThemeProvider>
    );

    const link = await screen.findByRole("link", {
      name: linkText,
    });
    expect(link).toHaveAttribute("href", linkUrl);
  });
});
