import React from "react";
import { useSelector } from "react-redux";

function SmallScreenContainer() {
  const { theme } = useSelector((state) => state.theme);

  return (
    <div
      style={{ height: "calc(100vh - 50px)" }}
      className={`smallScreenContainer ${theme}`}
    >
      SmallScreenContainer
    </div>
  );
}

export default SmallScreenContainer;
