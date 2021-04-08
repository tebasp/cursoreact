import React, { Component } from "react";
import axios from "axios";
import CourseGrid from "../Organisms/CourseGrid";

export default class Courses extends Component {
  constructor(props) {
    super(props);

    this.state = {
      courses: [],
    };
  }

  componentDidMount() {
    axios
      .get("http://my-json-server.typicode.com/tebasp/cursoreact/courses")
      .then((resp) => {
        this.setState({
          courses: resp.data,
        });
      });
  }

  render() {
    const { courses } = this.state;

    return <CourseGrid courses={courses} />;
  }
}
