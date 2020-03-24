import { Button } from "semantic-ui-react";
import React from "react";
import { CalcButtonType } from "./CalcButtonType";

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
  ></Button>
);

export default CalcButton;
