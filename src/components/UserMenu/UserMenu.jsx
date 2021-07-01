import React from "react";
import "./userMenu.scss";
import { useDispatch } from "react-redux";
import UserAuth from "../../redux/operations/userOperations"

export default function UserMenu({ isAuth, name }) {


  const dispatch = useDispatch();

  
  return (
    <div className="user-menu">
      {isAuth && (
        <>
          <span>{name}</span>
          <span></span>
          <button type="button" onClick={()=>{dispatch(UserAuth.logout())}}>Log Out</button>
        </>
      )}
    </div>
  );

    

}
