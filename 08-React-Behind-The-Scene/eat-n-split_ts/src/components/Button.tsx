import { ReactNode } from "react";

interface ButtonViewProp {
  children: ReactNode;
  onClick?: () => void;
}

export default function Button({ children, onClick }: ButtonViewProp) {
  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}
