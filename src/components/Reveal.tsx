import { createElement, type CSSProperties, type ReactNode } from "react";
import { useReveal } from "@/hooks/use-reveal";
import { cn } from "@/lib/utils";

type RevealTag = "div" | "section" | "h1" | "h2" | "h3" | "p" | "span" | "li" | "a";

interface RevealProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  as?: RevealTag;
}

export const Reveal = ({ children, className, delay = 0, as: Tag = "div" }: RevealProps) => {
  const ref = useReveal<HTMLElement>();
  const style = { "--delay": `${delay}ms` } as CSSProperties & Record<"--delay", string>;

  return createElement(Tag, {
    ref,
    className: cn("reveal", className),
    style,
    children,
  });
};
