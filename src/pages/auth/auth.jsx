import React from "react";
import AuthForm from "../../components/AuthForm/AuthForm";
import "./auth.scss";

export default function Auth() {
  return (
    <>
      <span className="big-logo">myBlog</span>
      <AuthForm />
    </>
  );
}
