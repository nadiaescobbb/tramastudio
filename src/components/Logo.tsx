import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  size?: number | string;
  color?: string;
}

export const Logo = ({ className, size = 32, color = "currentColor" }: LogoProps) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("transition-colors duration-500", className)}
    >
      {/* Pillar Left */}
      <rect x="22" y="10" width="22" height="80" fill={color} />
      {/* Arm Left */}
      <rect x="10" y="10" width="12" height="22" fill={color} />
      
      {/* Pillar Right */}
      <rect x="56" y="10" width="22" height="80" fill={color} />
      {/* Arm Right */}
      <rect x="78" y="10" width="12" height="22" fill={color} />
    </svg>
  );
};
