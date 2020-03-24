import { Button } from "semantic-ui-react";
import { CalcButtonType } from "./CalcButtonType";
import React from "react";

const CalcButton = ({ value, onClick, style, color, size }: CalcButtonType) => (
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
