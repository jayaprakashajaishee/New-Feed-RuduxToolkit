import React from "react";
import { Checkbox } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
import { sourceFav } from "../action/action";
import { selectSource } from "../action/action";

function SourceCard({ source, fav, id, selected }) {
  const dispatch = useDispatch();

  return (
    <div
      className="sourceCard"
      style={{ backgroundColor: selected && "#2666CF" }}
    >
      <div
        onClick={() => dispatch(selectSource(id))}
        style={{
          marginLeft: "5px",
          height: "35px",
          display: "flex",
          alignItems: "center",
          width: "90%",
        }}
      >
        <p>{source}</p>
      </div>
      <Checkbox
        icon={<StarBorderIcon />}
        checkedIcon={<StarIcon sx={{ color: "#FFDF00" }} />}
        checked={fav}
        onChange={() => dispatch(sourceFav(id))}
      />
    </div>
  );
}

export default SourceCard;
