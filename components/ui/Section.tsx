import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type SectionProps = {
  /** "dark" = default black/dark bg  |  "light" = warm off-white bg */
  variant?: "dark" | "light";
  children: ReactNode;
  className?: string;
};

/**
 * Section wrapper — applies the correct CSS token set so that all
 * child components that reference var(--section-bg), var(--text-primary),
 * var(--card-bg), etc. automatically receive the right values.
 */
export default function Section({ variant = "dark", children, className }: SectionProps) {
  return (
    <div className={cn(variant === "light" && "section-light", className)}>
      {children}
    </div>
  );
}
