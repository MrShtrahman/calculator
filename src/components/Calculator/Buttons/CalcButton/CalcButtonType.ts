import { SemanticSIZES, SemanticCOLORS } from "semantic-ui-react";
import { ReactText /*MouseEvent, SyntheticEvent*/ } from "react";
export type CalcButtonType = {
  value: ReactText;
  onClick: () => void;
  style: object;
  color: SemanticCOLORS;
  size: SemanticSIZES;
};
