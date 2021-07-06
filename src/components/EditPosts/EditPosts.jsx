import React from "react";
import styles  from "./EditPosts.module.scss"

export default function EditPosts (){
    return(
        <section className={styles.editContent}>
        <button type="button" className={styles.button}>Add post</button>
        <input type="text" className={styles.inputSearch} placeholder='What would you like to find...'/>
        <button type="button" className={styles.button}>Search post</button>
      </section>
    )
}