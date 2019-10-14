import React from "react";
import styles from "./ArticleImage.module.css";



const ArticleImage = ({article}) => {
    return(
            <img className={styles.image} src={article.image._url} alt={article.title} />
    )

}


export default ArticleImage;