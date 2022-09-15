import React from "react";
import { useSelector, useDispatch } from "react-redux";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import { themeChange } from "../action/action";
import IconButton from "@mui/material/IconButton";
import SourceDrawer from "../Sources/SourceDrawer";

function Navbar() {
  const theme = useSelector((state) => state.theme);
  const dispatch = useDispatch();
  return (
    <div className="navbar">
      <div style={{ display: "flex", alignItems: "center" }}>
        <SourceDrawer />
        <h2 style={{ fontWeight: 400, marginLeft: "20px" }}>
          News Feed
        </h2>
      </div>
      <IconButton
        onClick={() => dispatch(themeChange())}
        variant="contained"
        sx={{
          mr: "20px",
          color: theme !== "light" ? "white" : "#2C3333",
          ":hover": { bgcolor: theme === "light" ? "white" : "#2C3333" },
        }}
      >
        {theme === "light" ? <DarkModeIcon /> : <LightModeIcon />}
      </IconButton>
    </div>
  );
}

export default Navbar;
