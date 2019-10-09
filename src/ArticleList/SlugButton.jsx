import React from "react";
import styles from "./SlugButton.module.css";

const SlugButton = ({button}) => {
    return(
        <div>
          <button className={styles.button} onClick={() => alert(`${button.slug}`)}>{button.author}</button>
          
        </div>
    )

}


export default SlugButton;