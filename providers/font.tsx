import { ReactNode } from "react";

type FontProps = {
  children: ReactNode;
};

export const FontProvider = ({ children }: FontProps) => {
   return <body className="antialiased">{children}</body>;
50
};0