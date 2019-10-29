import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from "./ArticleListItem"
import ArticleImage from "./ArticleImage"
import styles from "./ArticleList.module.css";



const ArticleList = props => {
  return (
    <article className={styles.article}>
      <div className={styles.temp}>
        {props.articles.map(article => (
          <div className={styles.list} key={article.slug}>
            <ArticleImage article={article}/>
            <ArticleListItem article={article}/>
          </div>
        ))}
      </div>
    </article>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
