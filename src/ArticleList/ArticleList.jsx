import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from "./ArticleListItem"
import ArticleImage from "./ArticleImage"
import styles from "./ArticleList.module.css";



const ArticleList = props => {
  return (
    <article className={styles.article}>
    <dl>
      {props.articles.map(article => (
        <dt className={styles.list} key={article.slug}>
          <ArticleImage article={article}/>
          <ArticleListItem article={article}/>
        </dt>
      ))}
    </dl>
    </article>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
