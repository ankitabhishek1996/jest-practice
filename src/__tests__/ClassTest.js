import React from 'react';
import renderer from 'react-test-renderer';
import { Users } from "../User"; // Adjust the path as necessary

describe("Testing for class", () => {
  test("Test for class component", () => {
    const componentData = renderer.create(<Users />).getInstance();
    expect(componentData.getAllValue()).toMatch("all list");
  });
});
