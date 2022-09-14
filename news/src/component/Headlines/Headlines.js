import React from "react";
import { useSelector } from "react-redux";
import HeadlineCard from "./HeadlineCard";
import LoadingCircle from "../Loading/LoadingCircle";

function Headlines() {
  const Headlines = useSelector((state) => state.headlines);
  const { loading, headlines, error } = Headlines;

  return loading ? (
    <LoadingCircle />
  ) : error ? (
    <div>Error</div>
  ) : headlines ? (
    <div
      style={{
        width: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      <h2>{headlines.name}</h2>
      <div
        style={{
          height: "100%",
          width: "100%",
          overflow: "auto",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {headlines.articles.map((headline, i) => (
          <HeadlineCard headline={headline} key={i} />
        ))}
      </div>
    </div>
  ) : (
    <div
      style={{
        height: "100%",
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      Select a source
    </div>
  );
}

export default Headlines;
