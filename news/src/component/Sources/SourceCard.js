import React from "react";
import { Checkbox } from "@mui/material";
import StarBorderIcon from "@mui/icons-material/StarBorder";
import StarIcon from "@mui/icons-material/Star";
import { useDispatch } from "react-redux";
// import { sourceFav } from "../action/action";
import { favSource } from "../reducers/sourceSlice";
// import { selectSource } from "../action/action";
import { selectSource } from "../reducers/sourceSlice";
import { motion } from "framer-motion";

function SourceCard({ source, fav, id, selected }) {
  const dispatch = useDispatch();
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      className="sourceCard"
      style={{ backgroundColor: selected && "#2666CF" }}
    >
      <div
        onClick={() => !selected && dispatch(selectSource({ id, source }))}
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
        onChange={() => dispatch(favSource(id))}
      />
    </motion.div>
  );
}

export default SourceCard;
