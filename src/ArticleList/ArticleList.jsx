import React from "react";
import PropTypes from 'prop-types'

const ArticleList = props => {
  return (
    <ul>
      {props.articles.map(article => (
        <li key={article.slug}>
        <h3>{article.title}</h3>
        <p>{article.shortText}</p>
        <time dateTime={article.pubDate}>{article.pubDate}</time><button onClick={() => alert(`${article.slug}`)}>Show article slug</button>
        </li>
      ))}

    </ul>
  );
};



ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;
