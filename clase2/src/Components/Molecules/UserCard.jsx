import React from "react";

export default function UserCard({ name, username, email }) {
  return (
    <div className="card">
      <div className="card-body">
        <h3 className="card-title">{name}</h3>
        <p className="card-professor">{username}</p>
        <code className="card-price">{email}</code>
      </div>
    </div>
  );
}
