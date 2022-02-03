import React, { useContext } from "react";
import { NewsContext } from "../NewsContext";
import NewsArticle from "./NewsArticle";
function News(props) {
  const { data } = useContext(NewsContext);
  return (
    <div className="all_news">
      {data
        ? data.articles.map((news) => (
            <NewsArticle data={news} keys={news.url} />
          ))
        : "loading"}
    </div>
  );
}

export default News;
