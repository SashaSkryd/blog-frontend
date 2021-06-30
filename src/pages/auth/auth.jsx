import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import userOperations from "../../redux/operations/userOperations"
import { useDispatch } from "react-redux";

const schema = Yup.object().shape({
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
export default function Auth() {
  const [isSubmitting, setSubmitting] = useState(false);
  const dispatch = useDispatch();


  return (
    <>
      <Formik
        initialValues={{ name: "", email: "", password: "" }}
        onSubmit={(values) => {
          setSubmitting(true);
          dispatch(userOperations.register(values))
          setTimeout(() => {
            alert(JSON.stringify(values, null, 2)); 
            setSubmitting(false);
          }, 400);
        }}
        validationSchema={schema}
      >
          <Form>
            <Field type="name" name="name" />
            <ErrorMessage name="name" component="div" />
            <Field type="email" name="email" />
            <ErrorMessage name="email" component="div" />
            <Field type="password" name="password" />
            <ErrorMessage name="password" component="div" />
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </Form>
      </Formik>
    </>
  );
}
