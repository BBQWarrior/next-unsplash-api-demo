import { ReactNode } from "react";

type ResponsiveSeciontType = {
  children: ReactNode;
  className: string;
}

export const ResponsiveSection = ({children, className}: ResponsiveSeciontType) => (
  <section className={`lg:w-[980px] mx-4 lg:mx-auto my-10 ${className}`}>
    {children}
  </section>
)
