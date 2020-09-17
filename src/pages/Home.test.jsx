import React from "react";
import { render } from "@testing-library/react";
import Home from "./Home";

test("renders create-room actionable", () => {
  const { getByRole } = render(<Home />);
  const createElement = getByRole("button", { name: "Create a room" });
  expect(createElement).toBeInTheDocument();
});

test("renders join-room actionables", () => {
  const { getByRole } = render(<Home />);
  const joinInputElement = getByRole("textbox", { name: "Room ID" });
  expect(joinInputElement).toBeInTheDocument();
  const joinButtonElement = getByRole("button", { name: "Join" });
  expect(joinButtonElement).toBeInTheDocument();
});
