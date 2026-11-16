import { beforeEach, describe, expect, it } from "vitest";
import { setSeo } from "@/lib/seo";

describe("setSeo", () => {
  beforeEach(() => {
    document.head.innerHTML = `
      <title>HeyTrama</title>
      <meta name="description" content="default" />
      <link rel="canonical" href="/" />
      <meta property="og:title" content="og:default" />
      <meta property="og:description" content="og:default" />
      <meta property="og:url" content="og:default" />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content="default" />
      <meta property="og:image" content="og:default" />
    `;
  });

  it("sets document title", () => {
    setSeo({ title: "Test Title", description: "Test desc" });

    expect(document.title).toBe("Test Title");
  });

  it("sets meta description", () => {
    setSeo({ title: "X", description: "Custom description" });

    expect(
      document.querySelector('meta[name="description"]')?.getAttribute("content"),
    ).toBe("Custom description");
  });

  it("sets canonical URL", () => {
    setSeo({
      title: "X",
      description: "X",
      path: "/proyectos/famvar",
    });

    expect(
      document.querySelector('link[rel="canonical"]')?.getAttribute("href"),
    ).toBe("https://www.heytrama.com/proyectos/famvar");
  });

  it("sets OG tags", () => {
    setSeo({
      title: "OG Title",
      description: "OG Desc",
      path: "/test",
    });

    expect(
      document.querySelector('meta[property="og:title"]')?.getAttribute("content"),
    ).toBe("OG Title");

    expect(
      document.querySelector('meta[property="og:description"]')?.getAttribute("content"),
    ).toBe("OG Desc");

    expect(
      document.querySelector('meta[property="og:url"]')?.getAttribute("content"),
    ).toBe("https://www.heytrama.com/test");

    expect(
      document.querySelector('meta[property="og:type"]')?.getAttribute("content"),
    ).toBe("website");

    expect(
      document.querySelector('meta[property="og:site_name"]')?.getAttribute("content"),
    ).toBe("HeyTrama");
  });

  it("uses default image when none is provided", () => {
    setSeo({ title: "X", description: "X" });

    expect(
      document.querySelector('meta[property="og:image"]')?.getAttribute("content"),
    ).toBe("https://www.heytrama.com/og-heytrama.jpg");
  });

  it("uses custom image when provided", () => {
    setSeo({
      title: "X",
      description: "X",
      image: "https://example.com/custom.jpg",
    });

    expect(
      document.querySelector('meta[property="og:image"]')?.getAttribute("content"),
    ).toBe("https://example.com/custom.jpg");
  });

  it("uses custom OG description when provided", () => {
    setSeo({
      title: "X",
      description: "Default description",
      ogDescription: "Custom OG description",
    });

    expect(
      document.querySelector('meta[property="og:description"]')?.getAttribute("content"),
    ).toBe("Custom OG description");
  });

  it("defaults path to root", () => {
    setSeo({ title: "X", description: "X" });

    expect(
      document.querySelector('link[rel="canonical"]')?.getAttribute("href"),
    ).toBe("https://www.heytrama.com/");
  });
});
