import React from "react";
import styles  from "./EditPosts.module.scss"

export default function EditPosts ({setOverlay,overlay}){

 async function addClass (id){
     
     await setTimeout(()=>{
            document.getElementById(id).classList.add(`${id}-entered`);
        }, 500);
   
 } 

    return(
        <section className={styles.editContent}>
        <button type="button" className={styles.button} 
          disabled={overlay}  
        onClick={async()=>{
          setOverlay(true) 
         await addClass("overlay")
         await addClass("wrapper")
        }}
        >Add post</button>
        <input type="text" className={styles.inputSearch} placeholder='What would you like to find...'/>
        <button type="button" className={styles.button}>Search post</button>
      </section>
    )
}