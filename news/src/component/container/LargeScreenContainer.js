import React from "react";
import { useSelector } from "react-redux";

function LargeScreenContainer({ source }) {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      style={{ display: "flex", height: "calc(100vh - 50px)" }}
      className={theme}
    >
      <div
        style={{
          width: "calc(100% / 4)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "auto",
        }}
      >
        {source}
      </div>
    </div>
  );
}

export default LargeScreenContainer;
