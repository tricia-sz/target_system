import type { HTMLAttributes, ReactNode } from "react";
import { cn } from "../lib/utils";

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: ReactNode;
}

export function Container({ children, className, ...props }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-2", className)} {...props}>
      {children}
    </div>
  );
}
