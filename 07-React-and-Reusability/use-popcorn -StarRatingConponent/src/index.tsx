import React from "react";
import ReactDOM from "react-dom/client";
// import "./index.css";
// import App from "./App";
import StarsRating from "./components/StarsRating";
import Test from "./components/Test";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StarsRating maxRating={5} />
    <StarsRating
      maxRating={5}
      messages={["Terrible", "Bad", "Okey", "Good", "Amazing"]}
    />
    <StarsRating maxRating={10} size={24} color="red" defaultRating={3} />
    <Test />
  </React.StrictMode>
);
