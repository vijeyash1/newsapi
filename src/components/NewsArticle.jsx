import React from "react";
import "./NewsArticle.css";
function NewsArticle({ data, key }) {
  return (
    <div key={key} className="news">
      <h1 className="news__title">{data.title}</h1>
      <p className="news__desc">{data.description}</p>
      <span className="news__author">{data.author}</span>
      <span className="news__published">{data.publishedAt}</span>
      <span className="news__source">{data.source.name}</span>
      <img src={data.urlToImage} width="400" height="350" alt="news images" />
    </div>
  );
}

export default NewsArticle;
