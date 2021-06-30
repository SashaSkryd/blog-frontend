import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import userOperations from "../../redux/operations/userOperations";
import { useDispatch } from "react-redux";
import styles from './AuthForm.module.scss';

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
    <div className={styles.mainContainer}>

    
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
      <div className={styles.formContainer}>
        {isRegister && (
          <>
            <Field type="name" name="name" placeholder="name" className={styles.inputForm}/>
            <ErrorMessage name="name" component="span" className={styles.spanFormError} />
          </>
        )}
        <Field type="email" name="email" placeholder="e-mail" className={styles.inputForm} />
        <ErrorMessage name="email" component="span" className={styles.spanFormError} />
        <Field type="password" name="password" placeholder="password" className={styles.inputForm} />
        <ErrorMessage name="password" component="span" className={styles.spanFormError} />
        </div>
        <div className={styles.buttonContainer}>
        <button type="submit" disabled={isSubmitting} className={styles.buttonForm}>
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
