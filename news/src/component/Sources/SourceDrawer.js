import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import Button from "@mui/material/Button";
import Sources from "./Sources";
import FavouriteSources from "../FavouriteSources/FavouriteSources";
import { useSelector } from "react-redux";
import {
  IconButton,
  Box,
  SwipeableDrawer,
  List,
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Drawer,
} from "@mui/material";

function SourceDrawer() {
  const [drawer, setDrawer] = useState(false);
  const handleDrawer = () => setDrawer((prev) => !prev);
  const { theme } = useSelector((state) => state.theme);
  return (
    <div style={{ marginLeft: "20px" }} className="sourceDrawerButton">
      <IconButton onClick={handleDrawer}>
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="left"
        open={drawer}
        onClose={handleDrawer}
        className={theme}
      >
        <div
          style={{
            width: "80vw",
            height: "100vh",
            overflow: "auto",
          }}
          className={`${theme}`}
        >
          <Sources />
          <FavouriteSources />
        </div>
      </Drawer>
    </div>
  );
}

export default SourceDrawer;
