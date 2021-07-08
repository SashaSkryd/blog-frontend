import React from "react";
import styles from "./Posts.module.scss";
import postOperations from "../../redux/operations/postOperations";
import { useDispatch } from "react-redux";

export default function Posts({ posts }) {
  const dispatch = useDispatch();

  return (
    <section className={styles.postContent}>
      <ul>
        {posts.map((el, i) => (
          <li key={i} id={el._id} className={styles.postItem}>
            <div className={styles.postHeader}>
              <h2 className={styles.postTitle}>{el.title}</h2>
              <span className={styles.postAuthor}>{`${el.authorName} at`}</span>
              <span className={styles.postDate}>{el.date}</span>
            </div>
            <div className={styles.imageWrapper}>
              <img
                src={`${el.img}`}
                alt="here your post img"
                className={styles.image}
              />
              <p className={styles.postText}>{el.text}</p>
            </div>
            <div className={styles.postFooter}>
              <button
                type="button"
                onClick={() => {
                  dispatch(postOperations.removePost(el._id));
                }}
                className={styles.postButton}
              >
                Delete
              </button>
              <button type="button" className={styles.postButton}>
                Edit
              </button>
              <button type="button" className={styles.postButton}>
                Comments
              </button>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}
