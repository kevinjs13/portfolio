/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Card from ".";

const urlLists = {
  appUrl: "",
  brandingUrl: "",
  wireframeUrl: "",
  repositoryUrl: "",
};

const mockProps = {
  imageUrl: "",
  imageAltText: "",
  techStack: "",
  title: "",
  description: "",
  urls: urlLists,
};

describe(`Card component`, () => {
  it("should have an image with an source based on prop", async () => {
    render(
      <Card
        imageUrl={mockProps.imageUrl}
        imageAltText={mockProps.imageAltText}
        techStack={mockProps.techStack}
        title={mockProps.title}
        urls={mockProps.urls}
        description={mockProps.description}
      />
    );

    const image = await screen.findByRole("img");
    expect(image).toBeTruthy();
    expect(image).toHaveAttribute("src", mockProps.imageUrl);
    expect(image).toHaveAttribute("alt", mockProps.imageAltText);
  });

  it("should have a h1 tag with a text based on props", async () => {
    render(
      <Card
        imageUrl={mockProps.imageUrl}
        imageAltText={mockProps.imageAltText}
        techStack={mockProps.techStack}
        title={mockProps.title}
        urls={mockProps.urls}
        description={mockProps.description}
      />
    );

    const title = await screen.findAllByRole("heading", {
      name: mockProps.title,
    });
    expect(title).toBeTruthy();
  });

  it("should have a h2 tag with a text based on props", async () => {
    render(
      <Card
        imageUrl={mockProps.imageUrl}
        imageAltText={mockProps.imageAltText}
        techStack={mockProps.techStack}
        title={mockProps.title}
        urls={mockProps.urls}
        description={mockProps.description}
      />
    );

    const description = await screen.findAllByRole("heading", {
      name: mockProps.description,
    });
    expect(description).toBeTruthy();
  });

  it("should load the show 4 buttons", async () => {
    render(
      <Card
        imageUrl={mockProps.imageUrl}
        imageAltText={mockProps.imageAltText}
        techStack={mockProps.techStack}
        title={mockProps.title}
        urls={mockProps.urls}
        description={mockProps.description}
      />
    );

    const links = await screen.findAllByRole("link");
    expect(links).toHaveLength(4);
  });
});
