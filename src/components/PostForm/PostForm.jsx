import React from "react";
// import styles from "./PostForm.module.scss";
import { Formik, Form, Field, ErrorMessage } from "formik";
import './PostForm.scss';
export default function PostForm({setOverlay}) {

  return (
    <div  id="overlay" className="overlay" onClick={(e)=>e.target.id === "overlay" ? setOverlay(false) : null}>
      <div id="wrapper" className='formWrapper' >
        {/* <Formik>
        <Form>
          <Field
            type="title"
            name="title"
            placeholder="Title"
            className={styles.title}
          />
          <ErrorMessage
            name="name"
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
        </Form>
      </Formik> */}
          <button type='button'>Confirm</button>
          <button type='button' onClick={()=>{setOverlay(false)}}>Cancel</button>
      </div>
    </div>
  );
}
