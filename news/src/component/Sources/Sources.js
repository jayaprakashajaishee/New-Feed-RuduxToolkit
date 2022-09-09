import React, { useEffect } from "react";
import SourceCard from "./SourceCard";
import { useSelector, useDispatch } from "react-redux";
import { getSources } from "../action/action";

function Sources() {
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
    sources &&
    sources.map((source, i) => <SourceCard source={source.name} key={i} />)
  );
}

export default Sources;
