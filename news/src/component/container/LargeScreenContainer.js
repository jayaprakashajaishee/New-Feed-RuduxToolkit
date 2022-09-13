import React from "react";
import { useSelector } from "react-redux";
import Sources from "../Sources/Sources";
import FavouriteSources from "../FavouriteSources/FavouriteSources";
import Headlines from "../Headlines/Headlines";

function LargeScreenContainer() {
  const theme = useSelector((state) => state.theme);
  return (
    <div
      style={{ display: "flex", height: "calc(100vh - 50px)" }}
      className={theme}
    >
      <div
        style={{
          width: "calc(100% / 5)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "auto",
        }}
      >
        <Sources />
        <FavouriteSources />
      </div>
      <div style={{ width: "35%" }}>
        <Headlines />
      </div>
    </div>
  );
}

export default LargeScreenContainer;
