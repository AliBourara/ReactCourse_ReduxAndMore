import { ReactNode, useState } from "react";

interface ListBoxViewProp {
  children: ReactNode;
}
function Box({ children }: ListBoxViewProp) {
  const [isOpen, setIsOpen] = useState(true);
  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen((open) => !open)}>
        {isOpen ? "–" : "+"}
      </button>
      {isOpen && children}
    </div>
  );
}
export default Box;
