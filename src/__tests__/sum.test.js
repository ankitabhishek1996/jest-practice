import { fireEvent, render, screen } from "@testing-library/react";
import { TestMessage, addNumbers } from "../sum";
import App from "../App";
("./sum");

beforeAll(() => {
  console.log("***************Testing started for this method************");
});

describe("Test group to accumulate all the test case", () => {
  test("test for sum function", () => {
    let a = 20;
    let b = 30;
    let output = 50;
    expect(addNumbers(a, b)).toBe(output);
  });

  test("test if text present or not", () => {
    render(<App />);
    const text = screen.getByText("This is for testing");
    expect(text).toBeInTheDocument();
  });

  test("test if text present or not in the child", () => {
    render(<TestMessage />);
    const text = screen.getByText(/This is for Testing/i);
    expect(text).toBeInTheDocument();
  });
  describe("Inner Test", () => {
    test("test text-box is present or not", () => {
      render(<TestMessage />);
      const test = screen.getByRole("textbox");
      const test2 = screen.getByPlaceholderText("enter");
      expect(test).toBeInTheDocument();
      expect(test2).toBeInTheDocument();
      expect(test).toHaveAttribute("name", "fname");
    });
  });
});

describe("Testing for getting the input of the target", () => {
  test("Testing the input passed to the textbox", () => {
    render(<App />);
    const value = screen.getByRole("textbox");
    fireEvent.change(value, { target: { value: "a" } });
    expect(value.value).toBe("a");
  });
});
