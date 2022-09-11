import React, { useState } from "react";
import FavouriteCard from "./FavouriteCard";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { useSelector, useDispatch } from "react-redux";

function FavouriteSources() {
  const [favOpen, setFavOpen] = useState(false);
  const handleOpen = () => setFavOpen((prev) => !prev);

  const Sources = useSelector((state) => state.sources);
  const { loading, error, sources } = Sources;
  const favSources = sources && sources.filter((source) => source.fav);
  const dispatch = useDispatch();
  console.log(sources);

  return loading ? (
    <div>Loading...</div>
  ) : error ? (
    <div>Error...</div>
  ) : (
    sources && (
      <List sx={{ width: "100%" }}>
        <ListItemButton onClick={handleOpen} sx={{ height: "40px" }}>
          <ListItemText
            primary={<h3>{`Favourites (${favSources.length})`}</h3>}
          />
          {favOpen ? <ExpandLess /> : <ExpandMore />}
        </ListItemButton>
        <Collapse in={favOpen} timeout="auto" unmountOnExit>
          <List
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            {favSources.map((source, i) => (
              <FavouriteCard
                source={source.name}
                //fav={source.fav}
                id={source.id}
                key={i}
              />
            ))}
          </List>
        </Collapse>
      </List>
    )
  );
}

export default FavouriteSources;