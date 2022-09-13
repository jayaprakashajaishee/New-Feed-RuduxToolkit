import React from "react";
import { useDispatch } from "react-redux";
import { selectHeadline } from "../action/action";
function HeadlineCard({ headline }) {
  const dispatch = useDispatch();
  return (
    <div
      onClick={() => dispatch(selectHeadline(headline.title))}
      className="sourceCard"
      style={{
        height: "auto",
        padding: "10px",
        backgroundColor: headline.selected && "#2666CF",
      }}
    >
      <img
        src={headline.urlToImage}
        style={{ maxWidth: "40%", borderRadius: "5px" }}
        loading="loading"
      />
      <p style={{ marginLeft: "10px", width: "50%" }}>{headline.title}</p>
    </div>
  );
}

export default HeadlineCard;
