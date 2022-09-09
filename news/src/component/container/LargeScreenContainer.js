import React from "react";

function LargeScreenContainer({ source }) {
  return (
    <div style={{ display: "flex", height: "calc(100vh - 50px)" }}>
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
