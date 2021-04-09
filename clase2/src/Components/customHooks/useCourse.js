import { useState, useEffect } from "react";
import axios from "axios";

const useCourse = (id) => {
  const [course, setCourse] = useState({});

  useEffect(() => {
    axios
      .get(`http://my-json-server.typicode.com/tebasp/cursoreact/courses/${id}`)
      .then((response) => {
        setCourse(response.data);
      });
  }, [id]);

  return course;
};

export default useCourse;
