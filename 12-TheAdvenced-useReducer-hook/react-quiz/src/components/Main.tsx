import React, { ReactNode } from "react";

interface MainPropType {
  children: ReactNode;
}

function Main({ children }: MainPropType) {
  return <main className="main">{children}</main>;
}

export default Main;
