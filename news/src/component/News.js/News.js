import React from "react";
import { useSelector } from "react-redux";

function News() {
  const news = useSelector((state) => state.news);
  return !news.title ? (
    <div>Select a Headline</div>
  ) : (
    <div className="news">
      <h2 style={{ margin: "20px" }}>{news.title}</h2>
      <p style={{ marginLeft: "20px", alignSelf: "flex-start" }}>
        {news.publishedAt.split("T")[0].split("-").reverse().join("/")}
      </p>
      <p
        style={{
          alignSelf: "flex-start",
          marginLeft: "20px",
          fontStyle: "italic",
        }}
      >
        {news.description}
      </p>

      <p style={{ marginLeft: "20px", alignSelf: "flex-start" }}>
        author: {news.author}
      </p>
      <img
        src={news.urlToImage}
        alt={news.title}
        style={{ maxWidth: "95%", borderRadius: "5px" }}
      ></img>
      <p style={{ marginLeft: "20px", alignSelf: "flex-start" }}>
        {news.content}
      </p>
      <a
        href={news.url}
        style={{ margin: "20px", alignSelf: "flex-start" }}
      >
        Read More ...
      </a>
    </div>
  );
}

export default News;
