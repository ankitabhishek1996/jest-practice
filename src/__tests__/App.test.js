import { fireEvent, render, screen } from "@testing-library/react";
import App from "../App";


test("click event test", () => {
  render(<App />);
  const btn = screen.getByRole("button");
  fireEvent.click(btn);  
  expect(screen.getByText(/The counter value is 1/i)).toBeInTheDocument();
});
