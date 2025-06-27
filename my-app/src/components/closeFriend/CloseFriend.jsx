import React from "react";
import './closeFriend.css';

// Named export instead of anonymous export
function CloseFriend({ user }) {
  const PF = process.env.REACT_APP_PUBLIC_FOLDER

  return (
    <div>
      <li className="sidebarFriend">
        <img src={PF+user.profile} alt="" className="sidebarFriendImg" />
        <span className="sidebarFriendName">{user.username}</span>
      </li>
    </div>
  );
}

export default CloseFriend;  // Exporting the named function
