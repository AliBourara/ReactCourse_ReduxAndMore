import { ReactNode } from "react";
import { Logo } from "./Logo";

interface NavBarViewProp {
  children: ReactNode;
}
export function NavBar({ children }: NavBarViewProp) {
  return (
    <>
      <nav className="nav-bar">
        <Logo />
        {children}
      </nav>
    </>
  );
}
