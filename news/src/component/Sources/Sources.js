import React, { useEffect, useState } from "react";
import SourceCard from "./SourceCard";
import { useSelector, useDispatch } from "react-redux";
import { getSources } from "../action/action";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";

function Sources() {
  const [sourceOpen, setSourceOpen] = useState(false);

  const handleOpen = () => setSourceOpen((prev) => !prev);

  const Sources = useSelector((state) => state.sources);
  const { loading, error, sources } = Sources;
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSources());
  }, [dispatch]);

  return loading ? (
    <div>loading...</div>
  ) : error ? (
    <div>Error</div>
  ) : (
    sources && (
      //sources.map((source, i) => <SourceCard source={source.name} key={i} />)
      <List sx={{ width: "100%" }}>
        <ListItemButton onClick={handleOpen} sx={{ height: "40px" }}>
          <ListItemText primary={<h3>{`Sources (${sources.length})`}</h3>} />
          {sourceOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={sourceOpen} timeout="auto" unmountOnExit>
          <List>
            {sources.map((source, i) => (
              <SourceCard source={source.name} key={i} />
            ))}
          </List>
        </Collapse>
      </List>
    )
  );
}

export default Sources;
