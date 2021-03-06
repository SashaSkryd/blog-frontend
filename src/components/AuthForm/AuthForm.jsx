import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { NavLink, useHistory } from "react-router-dom";
import * as Yup from "yup";
import userOperations from "../../redux/operations/userOperations";
import { useDispatch } from "react-redux";
import styles from "./AuthForm.module.scss";
// import postOperations from "../../redux/operations/postOperations";
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
  policy: Yup.boolean()
    .isTrue("Подтвердите свое согласие!")
    .required("Подтвердите свое согласие!"),
});

const loginSchema = Yup.object().shape({
  email: Yup.string().email("Введите почту!").required("Введите почту!"),
  password: Yup.string()
    .min(8, "Некорректная длинна поля!")
    .max(16, "Превышен лимит символов!")
    .required("Введите пароль!"),
});

export default function AuthForm() {
  
  const dispatch = useDispatch();
  const [isRegister, setRegister] = useState(true);
  const history = useHistory();

  return (
    <div className={styles.mainContainer}>
      <Formik
        initialValues={
          isRegister
            ? { name: "", email: "", password: "", policy: false }
            : { email: "", password: "" }
        }
        onSubmit={(values) => {
          const { name, email, password } = values;
          isRegister
            ? dispatch(userOperations.register({ name, email, password }, history))
            : dispatch(userOperations.login({email, password}, history));
            
        }}
        validationSchema={isRegister ? registerSchema : loginSchema}
      >
        <Form>
          <div className={styles.formContainer}>
            {isRegister && (
              <>
                <Field
                  type="name"
                  name="name"
                  placeholder="name"
                  className={styles.inputForm}
                />
                <ErrorMessage
                  name="name"
                  component="span"
                  className={styles.spanFormError}
                />
              </>
            )}
            <Field
              type="email"
              name="email"
              placeholder="e-mail"
              className={styles.inputForm}
            />
            <ErrorMessage
              name="email"
              component="span"
              className={styles.spanFormError}
            />
            <Field
              type="password"
              name="password"
              placeholder="password"
              className={styles.inputForm}
            />
            <ErrorMessage
              name="password"
              component="span"
              className={styles.spanFormError}
            />
            <label style={{ color: "white" }}>
              <NavLink to="/">Privacy policy</NavLink>{" "}
              <Field name="policy" type="checkbox" />
            </label>
            <ErrorMessage
              name="policy"
              component="span"
              className={styles.spanFormError}
            />
          </div>
          <div className={styles.buttonContainer}>
            <button
              type="submit"
              className={styles.buttonForm}
            >
              Submit
            </button>
            <button
              type="button"
              onClick={() => {
                setRegister(!isRegister);
              }}
              className={styles.buttonForm}
            >
              {isRegister ? "Sign In" : "Sign Up"}
            </button>
          </div>
        </Form>
      </Formik>
    </div>
  );
}
