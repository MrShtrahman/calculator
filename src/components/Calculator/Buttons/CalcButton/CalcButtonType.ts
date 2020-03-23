import { SemanticSIZES, SemanticCOLORS } from "semantic-ui-react";
import { ReactText /*MouseEvent, SyntheticEvent*/ } from "react";
export type CalcButtonType = {
  value: ReactText;
  onClick: any; // can't do it for and dont know why
  style: object;
  color: SemanticCOLORS;
  size: SemanticSIZES;
};
