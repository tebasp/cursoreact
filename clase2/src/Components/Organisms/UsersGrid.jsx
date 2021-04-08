import React from "react";
import withLoader from "../HOC/withLoader";
import UserCard from "../Molecules/UserCard";

const UsersGrid = ({ users }) => {
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
};

export default withLoader("users")(UsersGrid);
