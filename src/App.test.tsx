import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders Timeline", () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Timeline/i);
  expect(linkElement).toBeInTheDocument();
});
