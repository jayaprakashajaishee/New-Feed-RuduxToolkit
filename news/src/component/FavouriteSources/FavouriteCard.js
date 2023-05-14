import React from "react";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { sourceFav } from "../action/action";
import { motion } from "framer-motion";
import { selectSource } from "../action/action";

function FavouriteCard({ source, id, selected }) {
  const { theme } = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 1 }}
      className="sourceCard"
      style={{ backgroundColor: selected && "#2666CF" }}
    >
      <div
        onClick={() => !selected && dispatch(selectSource(id, source))}
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
      <IconButton
        onClick={() => dispatch(sourceFav(id))}
        variant="contained"
        sx={{
          mr: "20px",
          color: theme !== "light" ? "white" : "#2C3333",
          ":hover": { bgcolor: theme === "light" ? "white" : "#2C3333" },
        }}
      >
        <DeleteIcon />
      </IconButton>
    </motion.div>
  );
}

export default FavouriteCard;
