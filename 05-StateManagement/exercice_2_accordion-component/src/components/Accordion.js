import { useState } from "react";
import { data } from "./data";

const Accordion = () => {
  const [currOpen, setCurrOpen] = useState(null);
  return (
    <div className="accordion">
      {data.map((el, i) => (
        <AccordionItem
          onOpen={setCurrOpen}
          currOpen={currOpen}
          key={i}
          title={el.title}
          num={i}
        >
          {el.text}
        </AccordionItem>
      ))}
      <AccordionItem
        onOpen={setCurrOpen}
        currOpen={currOpen}
        title="test"
        num={22}
      >
        <h1>Steps to Learn React</h1>

        <ol>
          <li>
            <strong>Understand JavaScript:</strong>
            <p>
              Before diving into React, make sure you have a solid understanding
              of JavaScript, as React is built on it.
            </p>
          </li>

          <li>
            <strong>Learn HTML & CSS:</strong>
            <p>
              Get familiar with HTML for markup and CSS for styling, as React
              involves working with these technologies.
            </p>
          </li>

          <li>
            <strong>Explore ES6+ Features:</strong>
            <p>
              Learn ES6+ features like arrow functions, destructuring, and
              classes, which are commonly used in React development.
            </p>
          </li>

          <li>
            <strong>Get Started with React Basics:</strong>
            <p>
              Begin with React fundamentals such as components, JSX, state, and
              props. Create simple React applications.
            </p>
          </li>

          <li>
            <strong>Learn React Router:</strong>
            <p>
              Explore React Router to handle navigation and create single-page
              applications with multiple views.
            </p>
          </li>

          <li>
            <strong>State Management with Redux:</strong>
            <p>
              Understand the basics of Redux for managing state in larger React
              applications.
            </p>
          </li>

          <li>
            <strong>Explore React Hooks:</strong>
            <p>
              Learn about Hooks (useState, useEffect, etc.) to manage state and
              side effects in functional components.
            </p>
          </li>

          <li>
            <strong>Understand Context API:</strong>
            <p>
              Explore the Context API for managing global state in React
              applications.
            </p>
          </li>

          <li>
            <strong>Build Real-world Projects:</strong>
            <p>
              Apply your knowledge by building practical projects. This will
              solidify your understanding and showcase your skills.
            </p>
          </li>

          <li>
            <strong>Testing in React:</strong>
            <p>
              Learn about testing libraries like Jest and testing-library/react
              to ensure the reliability of your React applications.
            </p>
          </li>

          <li>
            <strong>Stay Updated:</strong>
            <p>
              React is continuously evolving. Stay updated with the latest
              features and best practices by following the official
              documentation and community updates.
            </p>
          </li>
        </ol>
      </AccordionItem>
    </div>
  );
};

export default Accordion;

function AccordionItem({ num, title, onOpen, currOpen, children }) {
  const isOpen = num === currOpen;
  function handelToggle() {
    onOpen(isOpen ? null : num);
  }

  return (
    <div className={`item ${isOpen ? "open" : ""}`} onClick={handelToggle}>
      <p className="number">{num < 9 ? `0${num + 1}` : num + 1}</p>
      <p className="title">{title}</p>
      <p className="icon">{isOpen ? "-" : "+"}</p>

      {isOpen && <p className="content-box">{children}</p>}
    </div>
  );
}
