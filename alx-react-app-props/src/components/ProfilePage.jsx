// src/components/ProfilePage.jsx
import React from "react";
import UserInfo from "./UserInfo";

function ProfilePage() {
  return (
    <div>
      <h1>Profile Page</h1>
      <UserInfo /> {/* renders UserProfile internally */}
    </div>
  );
}

export default ProfilePage;
