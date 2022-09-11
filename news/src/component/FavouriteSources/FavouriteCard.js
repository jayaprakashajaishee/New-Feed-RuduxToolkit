import React from "react";
import { useSelector, useDispatch } from "react-redux";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { sourceFav } from "../action/action";

function FavouriteCard({ source, id }) {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="sourceCard">
      <p>{source}</p>
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
    </div>
  );
}

export default FavouriteCard;
