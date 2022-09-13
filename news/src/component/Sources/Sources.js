import React, { useEffect, useState, useCallback } from "react";
import SourceCard from "./SourceCard";
import { useSelector, useDispatch } from "react-redux";
import { getSources, selectSource } from "../action/action";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { Skeleton } from "@mui/material";

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
    <div>
      <Skeleton height={50} width={300} animation={"pulse"} />
    </div>
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
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {sources.map((source, i) => (
              <SourceCard
                source={source.name}
                fav={source.fav}
                id={source.id}
                selected={source.selected}
                key={i}
              />
            ))}
          </List>
        </Collapse>
      </List>
    )
  );
}

export default Sources;
