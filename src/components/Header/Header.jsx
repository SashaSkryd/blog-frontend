import React from "react";
import { NavLink } from "react-router-dom";
import UserMenu from "../UserMenu/UserMenu";
import { useSelector } from "react-redux";
import "./header.scss";

export default function Header() {
  const name = useSelector((state) => state.auth.user.name);
  const isAuth = useSelector((state) => state.auth.isAuthenticated);

  return (
    <div className={`header ${isAuth && "auth-header"}`}>
      <span className="logo">myBlog</span>
      {isAuth && (
        <>
          <nav>
            <ul className="nav-list">
              <li>
                <NavLink to="/" className="nav-link">
                  Home
                </NavLink>
              </li>
            </ul>
          </nav>
          <UserMenu isAuth={isAuth} name={name} />
        </>
      )}
    </div>
  );
}
