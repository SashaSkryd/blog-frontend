import React from "react";
import { useSelector } from "react-redux";
import styles from "./Profile.module.scss";

export default function Profile() {
  const user = useSelector((state) => state.auth.user);

  return (
    <section className={styles.profileContent}>
      <div className={styles.avatarWrapper}>
        <img src="" alt="here your avatar" />
      </div>
      <div className={styles.profileInfo}>
        <h1 className={styles.userName}>{`${user.name}`}</h1>
      </div>
    </section>
  );
}
