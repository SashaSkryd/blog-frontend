import React from "react";
import { useState } from "react";
import styles from "./EditPosts.module.scss";

export default function EditPosts({ setOverlay, overlay, setFilterWord }) {
  const [word, setWord] = useState("");

  async function addClass(id) {
    await setTimeout(() => {
      document.getElementById(id).classList.add(`${id}-entered`);
    }, 500);
  }

  return (
    <section className={styles.editContent}>
      <button
        type="button"
        className={styles.button}
        disabled={overlay}
        onClick={async () => {
          setOverlay(true);
          await addClass("overlay");
          await addClass("wrapper");
        }}
      >
        Add post
      </button>
      <input
        onChange={(e) => {
          const {
            target: { value },
          } = e;
          setWord(value);
          setFilterWord(value);
        }}
        value={word}
        type="text"
        className={styles.inputSearch}
        placeholder="What would you like to find..."
      />
    </section>
  );
}
