import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
  tight?: boolean;
}

export default function Section({ children, className = "", id, tight = false }: SectionProps) {
  return (
    <section
      id={id}
      className={`relative w-full ${tight ? "py-16 md:py-20" : "py-24 md:py-32"} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">{children}</div>
    </section>
  );
}
