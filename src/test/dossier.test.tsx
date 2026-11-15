import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import App from "@/App";

describe("App routes", () => {
  it("renders NotFound for unknown project routes", async () => {
    render(
      <MemoryRouter initialEntries={["/proyectos/slug-inexistente"]}>
        <App />
      </MemoryRouter>
    );

    expect(
      await screen.findByText(/No encontramos esta página/i)
    ).toBeInTheDocument();
  });
});