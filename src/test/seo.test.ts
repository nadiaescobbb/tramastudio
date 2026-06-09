import { describe, it, expect, beforeEach } from "vitest";
import { setSeo } from "@/lib/seo";

describe("setSeo", () => {
  beforeEach(() => {
    document.head.innerHTML = `
      <title>Trama Studio</title>
      <meta name="description" content="default" />
      <link rel="canonical" href="/" />
      <meta property="og:title" content="og:default" />
      <meta property="og:description" content="og:default" />
      <meta property="og:url" content="og:default" />
      <meta property="og:image" content="og:default" />
      <meta name="twitter:title" content="tw:default" />
      <meta name="twitter:description" content="tw:default" />
      <meta name="twitter:image" content="tw:default" />
    `;
  });

  it("sets document title", () => {
    setSeo({ title: "Test Title", description: "Test desc" });
    expect(document.title).toBe("Test Title");
  });

  it("sets meta description", () => {
    setSeo({ title: "X", description: "Custom description" });
    expect(document.querySelector('meta[name="description"]')?.getAttribute("content")).toBe("Custom description");
  });

  it("sets canonical URL", () => {
    setSeo({ title: "X", description: "X", path: "/proyectos/bosco" });
    const canonical = document.querySelector('link[rel="canonical"]');
    expect(canonical?.getAttribute("href")).toBe("https://tramastudio.vercel.app/proyectos/bosco");
  });

  it("sets OG tags", () => {
    setSeo({ title: "OG Title", description: "OG Desc", path: "/test" });
    expect(document.querySelector('meta[property="og:title"]')?.getAttribute("content")).toBe("OG Title");
    expect(document.querySelector('meta[property="og:description"]')?.getAttribute("content")).toBe("OG Desc");
    expect(document.querySelector('meta[property="og:url"]')?.getAttribute("content")).toBe("https://tramastudio.vercel.app/test");
  });

  it("sets Twitter tags", () => {
    setSeo({ title: "TW Title", description: "TW Desc" });
    expect(document.querySelector('meta[name="twitter:title"]')?.getAttribute("content")).toBe("TW Title");
    expect(document.querySelector('meta[name="twitter:description"]')?.getAttribute("content")).toBe("TW Desc");
  });

  it("uses default image when none provided", () => {
    setSeo({ title: "X", description: "X" });
    expect(document.querySelector('meta[property="og:image"]')?.getAttribute("content")).toBe("https://tramastudio.vercel.app/og-trama.png");
  });

  it("uses custom image when provided", () => {
    setSeo({ title: "X", description: "X", image: "https://example.com/custom.jpg" });
    expect(document.querySelector('meta[property="og:image"]')?.getAttribute("content")).toBe("https://example.com/custom.jpg");
  });

  it("defaults path to /", () => {
    setSeo({ title: "X", description: "X" });
    expect(document.querySelector('link[rel="canonical"]')?.getAttribute("href")).toBe("https://tramastudio.vercel.app/");
  });
});
