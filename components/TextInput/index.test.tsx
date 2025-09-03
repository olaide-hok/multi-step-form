import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import TextInput from "./index";

describe("TextInput component", () => {
  it("renders label and input correctly", () => {
    render(
      <TextInput
        name="username"
        label="Username"
        placeholder="Enter username"
      />,
    );
    expect(screen.getByLabelText("Username")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("Enter username")).toBeInTheDocument();
  });

  it("renders error message when error is true", () => {
    render(
      <TextInput name="email" label="Email" error placeholder="Enter email" />,
    );
    expect(screen.getByText("This field is required")).toBeInTheDocument();
    const input = screen.getByPlaceholderText("Enter email");
    expect(input.className).toContain("border-(--clr-red-500)");
  });

  it("applies default border color when error is false", () => {
    render(
      <TextInput
        name="password"
        label="Password"
        placeholder="Enter password"
      />,
    );
    const input = screen.getByPlaceholderText("Enter password");
    expect(input.className).toContain("border-(--clr-purple-200)");
  });

  it("updates value when typing", () => {
    render(
      <TextInput
        name="firstName"
        label="First Name"
        placeholder="Enter first name"
      />,
    );
    const input = screen.getByPlaceholderText(
      "Enter first name",
    ) as HTMLInputElement;

    fireEvent.change(input, { target: { value: "John" } });
    expect(input.value).toBe("John");
  });

  it("passes additional props to input", () => {
    render(
      <TextInput
        name="age"
        label="Age"
        type="number"
        placeholder="Enter age"
      />,
    );
    const input = screen.getByPlaceholderText("Enter age");
    expect(input).toHaveAttribute("type", "number");
  });
});
