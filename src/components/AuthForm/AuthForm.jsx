import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import userOperations from "../../redux/operations/userOperations";
import { useDispatch } from "react-redux";

const registerSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "Некорректная длинна поля!")
    .max(30, "Превышен лимит символов!")
    .required("Введите имя"),
  email: Yup.string().email("Введите почту!").required("Введите почту!"),
  password: Yup.string()
    .min(8, "Некорректная длинна поля!")
    .max(16, "Превышен лимит символов!")
    .required("Введите пароль!"),
});

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Введите почту!").required("Введите почту!"),
  password: Yup.string()
    .min(8, "Некорректная длинна поля!")
    .max(16, "Превышен лимит символов!")
    .required("Введите пароль!"),
});

export default function AuthForm() {
  const [isSubmitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();
  const [isRegister, setRegister] = useState(true);

  return (
    <Formik
      initialValues={
        isRegister
          ? { name: "", email: "", password: "" }
          : { email: "", password: "" }
      }
      onSubmit={(values) => {
        setSubmitting(true);
        isRegister
          ? dispatch(userOperations.register(values))
          : dispatch(userOperations.login(values));
        setTimeout(() => {
          setSubmitting(false);
        }, 500);
      }}
      validationSchema={isRegister ? registerSchema : loginSchema}
    >
      <Form>
        {isRegister && (
          <>
            <Field type="name" name="name" placeholder="name" />
            <ErrorMessage name="name" component="div" />
          </>
        )}
        <Field type="email" name="email" placeholder="e-mail" />
        <ErrorMessage name="email" component="div" />
        <Field type="password" name="password" placeholder="password" />
        <ErrorMessage name="password" component="div" />
        <button type="submit" disabled={isSubmitting}>
          Submit
        </button>
        <button
          type="button"
          onClick={() => {
            setRegister(!isRegister);
          }}
        >
          {isRegister ? "Sign In" : "Sign Up"}
        </button>
      </Form>
    </Formik>
  );
}
