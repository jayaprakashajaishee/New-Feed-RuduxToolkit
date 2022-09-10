import React from "react";
import { Checkbox } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
import { sourceFav } from "../action/action";

function SourceCard({ source, fav, id }) {
  const dispatch = useDispatch();

  return (
    <div className="sourceCard">
      <p>{source}</p>
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
