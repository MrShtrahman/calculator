import React, { FC } from "react";

import { CardContent } from "semantic-ui-react";
import { HistoryType } from "./HistoryType";

const History: FC<HistoryType> = ({ calcHistory }) => (
  <CardContent data-testid="history">{calcHistory}</CardContent>
);

export default History;
