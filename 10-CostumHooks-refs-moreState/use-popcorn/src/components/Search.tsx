import { DOMElement, useEffect, useRef, useState } from "react";
import { useKey } from "../useKey";

interface SearchViewProp {
  query: string;
  setQuery: React.Dispatch<React.SetStateAction<string>>;
}

export function Search({ query, setQuery }: SearchViewProp) {
  const inputEl = useRef<HTMLInputElement | null>(null);

  useKey("Enter", function () {
    if (document.activeElement === inputEl.current) return;
    inputEl.current?.focus();
    setQuery("");
  });

  // useEffect(
  //   function () {
  //     const callback = (e: KeyboardEvent) => {
  //       if (document.activeElement === inputEl.current) return;

  //       if (e.code === "Enter") {
  //         inputEl.current?.focus();
  //         setQuery("");
  //       }
  //     };
  //     document.addEventListener("keydown", callback);
  //     return () => document.addEventListener("keydown", callback);
  //   },
  //   [setQuery]
  // );

  return (
    <input
      className="search"
      type="text"
      placeholder="Search movies..."
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      ref={inputEl}
    />
  );
}
