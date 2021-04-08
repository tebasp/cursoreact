import React, { Component } from "react";
import axios from "axios";
import UserCard from "../Molecules/UserCard";
import UsersGrid from "../Organisms/UsersGrid";

class Users extends Component {
  constructor(props) {
    super(props);

    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
      this.setState({
        users: res.data,
      });
    });
  }

  render() {
    const { users } = this.state;

    return <UsersGrid users={users} />;
  }
}

export default Users;
