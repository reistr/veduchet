import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import { Accordion } from "./Accordion";
import userEvent from "@testing-library/user-event";

test("Displays the correct title", () => {
  const title = "Test title";
  const { getByTestId } = render(<Accordion title={title} />);

  expect(getByTestId("accordion-clickable-title")).toHaveTextContent(title);
});

// Failed to test actual expand bahaviour. Jest jsdom do not actual render the document
// hence to test that collapsed container appear
// it's needed to hevaily involve implementation details.
// By now the single difference indicating the component state changes is height property.
// TODO: test this with E2E
test("Content is colapsed by default", async () => {
  const title = "Test title";
  const content = "Test content";
  render(<Accordion title={title}>{content}</Accordion>);

  const collapsible = screen.getByTestId("accordion-collapsible");
  const computedStyle = window.getComputedStyle(collapsible);

  expect(computedStyle.height).toBe("0px");
});
