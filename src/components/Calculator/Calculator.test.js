import "@testing-library/jest-dom";

import { cleanup, fireEvent } from "@testing-library/react";

import Calculator from "./Calculator";
import React from "react";
import expect from "expect";
import { renderWithRedux } from "../../redux/testUtils";

afterEach(() => cleanup());
describe("Calculator", () => {
  it("performs basic calculations", () => {
    const { getByTestId } = renderWithRedux(<Calculator />);

    // Just a sanity test
    expect(getByTestId("result-label")).toHaveTextContent("0");

    // 12 + 450 - 8= 454
    const values = ["1", "2", "+", "4", "5", "0", "-", "8", "="];
    values.forEach(value => fireEvent.click(getByTestId(value)));

    expect(getByTestId("result-label")).toHaveTextContent("454");

    // back to square one
    fireEvent.click(getByTestId("C"));

    expect(getByTestId("result-label")).toHaveTextContent("0");

    // testing keyboard functionality
    const keyboardKeys = [
      { key: "1", code: 49 },
      { key: "2", code: 50 },
      { key: "+", code: 107 },
      { key: "5", code: 53 },
      { key: "Enter", code: 13 }
    ];
    keyboardKeys.forEach(value => fireEvent.keyDown(window, value));

    expect(getByTestId("result-label")).toHaveTextContent("17");
  });

  it("functions with memory", () => {
    const { getByTestId } = renderWithRedux(<Calculator />);
    const clickOnButtons = values => {
      fireEvent.click(getByTestId("C"));
      values.forEach(value => fireEvent.click(getByTestId(value)));
    };

    // Adding memory
    clickOnButtons(["1", "M+"]);

    expect(getByTestId("memory-label")).toHaveTextContent("M");

    // Using memory in calculations
    clickOnButtons(["4", "+", "MR", "="]);
    expect(getByTestId("result-label")).toHaveTextContent("5");

    // Subtracting from memory (now, M = -2)
    clickOnButtons(["6", "M-"]);
    expect(getByTestId("result-label")).toHaveTextContent("6");

    // Testing memory again
    clickOnButtons(["MR"]);

    expect(getByTestId("memory-label")).toHaveTextContent("M");
    expect(getByTestId("result-label")).toHaveTextContent("-5");

    // Reseting memory
    clickOnButtons(["8", "MC"]);

    expect(getByTestId("memory-label")).not.toHaveTextContent("M");
    expect(getByTestId("result-label")).toHaveTextContent("8");
  });

  it("handles errors", () => {
    const { getByTestId } = renderWithRedux(<Calculator />);

    // 1 / 0 = Infinity
    const values = ["1", "/", "0", "="];

    values.forEach(value => fireEvent.click(getByTestId(value)));

    expect(getByTestId("result-label")).toHaveTextContent("Infinity");
  });
});
