import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import Dossier from "@/pages/Dossier";

describe("Dossier 404", () => {
  it("renders NotFound for unknown slug", () => {
    render(
      <MemoryRouter initialEntries={["/proyectos/slug-inexistente"]}>
        <Dossier />
      </MemoryRouter>
    );

    expect(screen.getByText("No encontramos esta página")).toBeInTheDocument();
  });
});
