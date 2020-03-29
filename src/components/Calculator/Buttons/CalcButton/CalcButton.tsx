import React, { FC } from "react";

import { Button } from "semantic-ui-react";
import { CalcButtonType } from "./CalcButtonType";

const CalcButton: FC<CalcButtonType> = ({
  value,
  onClick,
  style,
  color,
  size
}) => (
  <Button
    inverted
    value={value}
    size={size}
    active={false}
    style={style}
    color={color}
    onClick={onClick}
    content={value}
    data-testid={value}
  ></Button>
);

export default CalcButton;
