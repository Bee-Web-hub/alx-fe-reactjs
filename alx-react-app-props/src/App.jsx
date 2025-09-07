// src/App.jsx
import React from "react";
import UserProfile from "./components/UserProfile";
import UserContext from "./components/UserContext"; // context is in components

function App() {
  const userData = { 
    name: "Alice", 
    age: 25, 
    bio: "Loves hiking and photography." 
  };

  return (
    <UserContext.Provider value={userData}>
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
