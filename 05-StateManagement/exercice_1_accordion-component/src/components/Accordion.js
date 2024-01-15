import { useState } from "react";
import { faqs } from "./data";

const DATA = faqs;

const Accordion = () => {
  <div className="accordion">
    {DATA.map((el, i) => (
      <AccordionItem key={i} title={el.title} text={el.text} num={i} />
    ))}
  </div>;
};

export default Accordion;

function AccordionItem({ num, title, text }) {
  const [isOpen, setIsOpen] = useState(false);

  function handelToggle() {
    setIsOpen((isOpen) => !isOpen);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handelToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <p className="content-box">{text}</p>}
    </div>
  );
}
