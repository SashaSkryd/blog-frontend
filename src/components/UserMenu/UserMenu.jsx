import React from "react";
import "./userMenu.scss";

export default function UserMenu({ isAuth, name }) {
  return (
    <div className="user-menu">
      {isAuth && (
        <>
          <span>{name}</span>
          <span></span>
          <button>Log Out</button>
        </>
      )}
    </div>
  );
}
