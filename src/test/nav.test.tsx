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
    expect(screen.getByText("Trama Studio")).toBeInTheDocument();
  });

  it("renders Volver on non-home route", () => {
    render(
      <MemoryRouter initialEntries={["/proyectos/bosco"]}>
        <Nav />
      </MemoryRouter>
    );
    expect(screen.getByText("Volver")).toBeInTheDocument();
  });

  it("renders Hablemos CTA", () => {
    renderNav();
    expect(screen.getByText("Hablemos")).toBeInTheDocument();
  });
});
