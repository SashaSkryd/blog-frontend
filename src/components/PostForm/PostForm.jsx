import React from "react";
import styles from "./PostForm.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import postOperations from "../../redux/operations/postOperations";
import "./PostForm.scss";
import { useDispatch } from "react-redux";
export default function PostForm({ setOverlay }) {
 const dispatch = useDispatch();
 
  return (
    <div
      id="overlay"
      className="overlay"
      onClick={(e) => (e.target.id === "overlay" ? setOverlay(false) : null)}
    >
      <div id="wrapper" className="formWrapper">
        <Formik initialValues={{ title: "", text: "", images: "" }}
        onSubmit={(values)=>{
          const {title,text}= values;
          dispatch(postOperations.addPost({title,date: `${new Date().toLocaleTimeString().slice(0,-3)} ${new Date().toLocaleDateString()}`,text}));
          setOverlay(false)
        }}
        >
          <Form>
            <Field
              type="title"
              name="title"
              placeholder="Title"
              className={styles.title}
            />
            <ErrorMessage
              name="title"
              component="span"
              className={styles.spanFormError}
            />
            <Field
              type="textarea"
              as="textarea"
              name="text"
              placeholder="Textarea"
              className={styles.textarea}
            />
            <ErrorMessage
              name="text"
              component="span"
              className={styles.spanFormError}
            />
            <Field name="images" type="file" className={styles.fileButton} />
            <ErrorMessage
              name="images"
              component="span"
              className={styles.spanFormError}
            />

            <div>
              <button type="submit" >Confirm</button>
              <button
                type="button"
                onClick={() => {
                  setOverlay(false);
                }}
              >
                Cancel
              </button>
            </div>
          </Form>
        </Formik>
      </div>
    </div>
  );
}
