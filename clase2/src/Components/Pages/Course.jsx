import React from "react";

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

const Course = ({ match }) => {
  // [0] por que filter retorna un array
  const currentCourse = cursos.filter(
    (curso) => curso.id === parseInt(match.params.id)
  )[0];

  console.log("curso", currentCourse);

  return (
    <div className="container">
      <div className="row">
        <h2>{currentCourse.title}</h2>
        <img src={currentCourse.image} alt={currentCourse.title} />
        <div>{currentCourse.professor}</div>
        <div>{currentCourse.price}</div>
      </div>
    </div>
  );
};

export default Course;
