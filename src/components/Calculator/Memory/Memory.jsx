import { CardContent } from "semantic-ui-react";
import React from "react";
import { useSelector } from "react-redux";

const Memory = () => {
  const isMemoShown = useSelector(state => state.memoReducer.isMemoShown);
  return (
    <CardContent content={isMemoShown ? "M" : ""} data-testid="memory-label" />
  );
};

export default Memory;
