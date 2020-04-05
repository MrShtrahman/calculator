import { SemanticCOLORS, SemanticSIZES } from "semantic-ui-react";

import { ReactText } from "react";

export type CalcButtonType = {
  value: ReactText;
  onClick: () => void;
  style: object;
  color: SemanticCOLORS;
  size: SemanticSIZES;
};
