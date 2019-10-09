import React from "react";
import styles from "./ArticleListItem.module.css";
import SlugButton from "./SlugButton"


const ArticleListItem = ({article}) => {
    return(
        <div>
          <h3 className={styles.h3}>{article.title}</h3>
          <p className={styles.p}>{article.shortText}</p>
          <div className={styles.content}>
            <time className={styles.time} dateTime={article.pubDate}>{article.pubDate}</time>
            <SlugButton className={styles.kk} button={article}/>     
          </div>
        </div>
    )

}


export default ArticleListItem;
