import "./Buttons.css";

import CalcButton from "./CalcButton/CalcButton";
import React from "react";
import { useOnClick } from "../../../hooks/useOnClick";

const chooseColor = value => {
  if (!isNaN(value)) return "blue";
  else {
    switch (value) {
      case "C":
        return "red";
      default:
        return "purple";
    }
  }
};

const Buttons = () => {
  const onClick = useOnClick();

  const values = [
    ["M+", "M-", "MR", "MC"],
    [7, 8, 9, "+"],
    [4, 5, 6, "-"],
    [1, 2, 3, "*"],
    ["C", 0, "=", "/"]
  ];

  return values.map((row, index) => (
    <div className="buttonsRow" key={index}>
      {row.map(value => (
        <CalcButton
          key={value}
          value={value}
          color={chooseColor(value)}
          clicked={() => onClick(value)}
        />
      ))}
    </div>
  ));
};

export default Buttons;
