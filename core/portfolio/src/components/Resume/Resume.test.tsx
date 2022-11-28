/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, screen } from "@testing-library/react";
import Default from ".";

test("should load the text", async () => {
  render(<Default />);

  // expect(screen.getByText('This is a default react component')).toBeInTheDocument();
});
