import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { Nav } from "@/components/Nav";

const renderNav = () => render(
  <MemoryRouter initialEntries={["/"]}>
    <Nav />
  </MemoryRouter>
);

describe("Nav", () => {
  it("renders brand name on home", () => {
    renderNav();
    expect(screen.getAllByText("HeyTrama").length).toBeGreaterThan(0);
  });

  it("renders brand name and secondary Volver on non-home route", () => {
    render(
      <MemoryRouter initialEntries={["/proyectos/famvar"]}>
        <Nav />
      </MemoryRouter>
    );
    expect(screen.getAllByText("HeyTrama").length).toBeGreaterThan(0);
    expect(screen.getByText("Volver")).toBeInTheDocument();
    expect(screen.getByLabelText("Volver atrás")).toBeInTheDocument();
  });

  it("renders Contar mi proyecto CTA", () => {
    renderNav();
    expect(screen.getAllByText("Contar mi proyecto").length).toBeGreaterThan(0);
  });
});
