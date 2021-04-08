import React, { Component } from "react";
import axios from "axios";
import UserCard from "../Molecules/UserCard";

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

    return (
      <div className="container">
        <div className="row">
          {users.map((user) => (
            <UserCard
              key={user.id}
              name={user.name}
              username={user.username}
              email={user.email}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default Users;
