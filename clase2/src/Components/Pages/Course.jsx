import React from "react";
import useCourse from "../customHooks/useCourse";

const Course = ({ match }) => {
  // [0] por que filter retorna un array
  // const currentCourse = cursos.filter(
  //   (curso) => curso.id === parseInt(match.params.id)
  // )[0];

  // const [state, setState] = useState({
  //   id: 1,
  //   title: "Node",
  //   image:
  //     "https://edteam-media.s3.amazonaws.com/courses/medium/7f3ac3ee-a5d5-4ce0-be38-4521dc70b011.png",
  //   price: 50,
  //   professor: "Esteban Palomeque",
  // });

  // const changeTitle = (title) => {
  //   setState({
  //     ...state,
  //     title,
  //   });
  // };

  const course = useCourse(match.params.id) || [];

  return (
    <div className="container">
      <div className="row">
        <h2>{course.title}</h2>
        <img src={course.image} alt={course.title} />
        <div>{course.professor}</div>
        <div>{course.price}</div>
      </div>

      {/* <button onClick={changeTitle.bind(this, "New title")}>
        Change title
      </button> */}
    </div>
  );
};

export default Course;
