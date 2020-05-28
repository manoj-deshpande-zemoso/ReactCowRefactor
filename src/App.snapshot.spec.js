import App from "./App";
import React from "react";
import renderer from "react-test-renderer";

describe("App - Reafactoring Tests", () => {
  it("should look the same", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
