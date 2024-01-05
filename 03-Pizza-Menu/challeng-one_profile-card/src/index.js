import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#FF9A00",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "TypeScript",
    level: "beginner",
    color: "#2F74C0",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: ".Net",
    level: "advanced",
    color: "#5D4B96",
  },
];
function App() {
  return (
    <div className="card">
      <Avatar photo="img/Avatar.jpg" name="Ali Bourara" />
      <div className="data">
        <Intro
          name="Ali Bourara"
          intro="As a web developer and graduate from Coding Dojo's bootcamp, I've mastered full-stack development using C#, MERN, and Python.
In just four months, I've completed three diverse projects, highlighting my ability to learn quickly and work effectively within a team.
Eager to advance in web development, I'm focused on enhancing both technical skills and collaboration for impactful contributions to innovative projects."
        />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar(props) {
  return (
    <div className="avatar">
      <img src={props.photo} alt={props.name} style={{ width: "442px" }} />
    </div>
  );
}
function Intro(props) {
  return (
    <div>
      <h1>{props.name}</h1>
      <p>{props.intro}</p>
    </div>
  );
}
function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill
          skill={skill.skill}
          level={skill.level}
          color={skill.color}
          key={skill.skill}
        />
      ))}
    </div>
  );
}
function Skill({ skill, level, color }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <p>{skill}</p>
      <p>
        {level === "beginner" && "👌"}
        {level === "intermediate" && "👍"}
        {level === "advanced" && "💪"}
      </p>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
