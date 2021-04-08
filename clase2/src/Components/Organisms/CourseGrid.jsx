import React from "react";
import withLoader from "../HOC/withLoader";
import Card from "../Molecules/Card";

const CourseGrid = ({ courses }) => {
  return (
    <div className="container">
      <h1>This is the title</h1>
      <div className="row">
        {courses.map((curso) => (
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
};

export default withLoader("courses")(CourseGrid);
