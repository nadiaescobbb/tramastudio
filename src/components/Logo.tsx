import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number | string;
  invert?: boolean;
  alt?: string;
}

export const Logo = ({ className, size = 32, invert = false, alt }: LogoProps) => {
  return (
    <img
      src="/ht-logo.png"
      alt={alt ?? ""}
      aria-hidden={alt ? undefined : true}
      style={{ width: typeof size === "number" ? `${size}px` : size }}
      className={cn("block h-auto w-auto object-contain transition-opacity duration-500", invert && "invert", className)}
    />
  );
};
