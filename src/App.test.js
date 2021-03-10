import React from "react";
import { render, screen, fireEvent, findByText } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import App from "./App";

test("renders h1 element - header", () => {
  render(<App />);
  expect(screen.getByTestId("header")).toHaveTextContent(
    "Career Lab | Take-Home Assignment"
  );
});

test("when user clicks submit it fires event", () => {
  render(<App />);
  fireEvent.click(screen.getByText("Submit"));
});

test("text area input value should be in document", ()=>{
    render(<App />);
    expect(screen.getByTestId("input")).toBeInTheDocument();
})

test("expect output to be in document after submit event is fired",  async ()=>{
    render(<App />);
    fireEvent.click(screen.getByText("Submit"));
    await expect(screen.getByTestId("result")).toBeInTheDocument();
})

test('result [output] appears after clicking submit', async () => {
    render(<App />);
    fireEvent.click(screen.getByText("Submit"));
    const outputDisplayValue = await screen.getByDisplayValue("This is a badly formatted file. This line is pretty long! It's way more than 80 characters! I feel a line wrap coming on! This is a second paragraph with extraneous whitespace.");
  })
