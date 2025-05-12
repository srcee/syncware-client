import { render, screen } from "@testing-library/react";
import { Login } from "./Login";

const initSUT = () => render(<Login />);

describe("Login", () => {
  it("should properly render the component", () => {
    initSUT();

    const message = screen.getByText("Login");

    expect(message).toBeInTheDocument();
  });
});
