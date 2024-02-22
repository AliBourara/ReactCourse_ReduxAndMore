import { ReactNode } from "react";

interface MainViewProp {
  children: ReactNode;
}
export function Main({ children }: MainViewProp) {
  return <main className="main">{children}</main>;
}
