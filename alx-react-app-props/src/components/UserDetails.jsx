import React, { useContext } from "react";
import UserContext from "./UserContext"; // same folder if in components

function UserDetails() {
  const userData = useContext(UserContext); // consume context

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Age: {userData.age}</p>
      <p>Bio: {userData.bio}</p>
    </div>
  );
}

export default UserDetails;
