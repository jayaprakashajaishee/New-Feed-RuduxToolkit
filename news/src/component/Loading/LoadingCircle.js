import React from "react";
import CircularProgress from "@mui/material/CircularProgress";

function LoadingCircle() {
  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress size={80} sx={{ color: "#2666CF" }} />
    </div>
  );
}

export default LoadingCircle;
