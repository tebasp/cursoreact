import React from "react";
import Card from "../Molecules/Card";

const cursos = [
  {
    id: 1,
    title: "Node",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/medium/7f3ac3ee-a5d5-4ce0-be38-4521dc70b011.png",
    price: 50,
    professor: "Esteban Palomeque",
  },
  {
    id: 2,
    title: "Java Script",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/medium/7f3ac3ee-a5d5-4ce0-be38-4521dc70b011.png",
    price: 100,
    professor: "Tebas Palo",
  },
  {
    id: 3,
    title: "Vue",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/medium/7f3ac3ee-a5d5-4ce0-be38-4521dc70b011.png",
    price: 600,
    professor: "Violeta Palomeque",
  },
  {
    id: 4,
    title: "React",
    image:
      "https://edteam-media.s3.amazonaws.com/courses/medium/7f3ac3ee-a5d5-4ce0-be38-4521dc70b011.png",
    price: 1,
    professor: "Janneth Fernandez",
  },
];

const Courses = () => (
  <div className="container">
    <h1>This is the title</h1>
    <div className="row">
      {cursos.map((curso) => (
        <Card
          id={curso.id}
          title={curso.title}
          image={curso.image}
          price={curso.price}
          professor={curso.professor}
          key={curso.id}
        />
      ))}
    </div>
  </div>
);

export default Courses;
