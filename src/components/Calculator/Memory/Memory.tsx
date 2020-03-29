import React, { FC } from "react";

import { CardContent } from "semantic-ui-react";
import { MemoryType } from "./MemoryType";

const Memory: FC<MemoryType> = ({ isMemoShown }) => (
  <CardContent data-testid="memory-label">{isMemoShown ? "M" : ""}</CardContent>
);

export default Memory;
