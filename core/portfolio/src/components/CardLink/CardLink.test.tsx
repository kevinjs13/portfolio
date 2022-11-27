/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import CardLink from ".";
import { IoAccessibilityOutline } from "react-icons/io5";

const linkText = `Sample Button`;
const linkUrl = `#`;

describe(`Card Link component`, () => {
  it("should be a link", async () => {
    render(<CardLink text={linkText} link={linkUrl} />);

    const links = await screen.findAllByRole("link");
    expect(links).toHaveLength(1);
  });

  it("should have a text based on prop", async () => {
    render(<CardLink text={linkText} link={linkUrl} />);

    const link = await screen.findAllByRole("link", {
      name: linkText,
    });
    expect(link).toBeTruthy();
  });

  it("should have a link based on prop", () => {
    render(<CardLink text={linkText} link={linkUrl} />);

    const link = screen.getByText(linkText);
    expect(link).toHaveAttribute("href", linkUrl);
  });

  it("should have an icon if passed as props", () => {
    render(
      <CardLink
        text={linkText}
        link={linkUrl}
        icon={<IoAccessibilityOutline />}
      />
    );

    const link = screen.getByText(linkText);
    expect(link).toHaveAttribute("href", linkUrl);
  });
});
