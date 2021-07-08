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
        <Formik
          initialValues={{ title: "", text: "", images: "" }}
          onSubmit={(values) => {
            const { title, text } = values;
            dispatch(
              postOperations.addPost({
                title,
                date: `${new Date()
                  .toLocaleTimeString()
                  .slice(0, -3)} ${new Date().toLocaleDateString()}`,
                text,
              }),
            );
            setOverlay(false);
          }}
        >
          <Form>
            <Field
              type="title"
              name="title"
              placeholder="Come up with a title for your post"
              className={styles.formInput}
            />

            <Field
              type="textarea"
              as="textarea"
              name="text"
              placeholder="Write your text here"
              className={styles.textarea}
            />

            <label>
              Choose image for your post
              <Field
                name="images"
                type="file"
                className={styles.image}
                placeholder="Choose image for your post"
              />
            </label>

            <div className={styles.formButtonWrapper}>
              <button className={styles.formButton} type="submit">
                Confirm
              </button>
              <button
                type="button"
                className={styles.formButton}
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
