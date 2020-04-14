import { useEventHandler } from "./useEventHandler";

export const useOnClick = () => {
  const {
    handleNumberClicked,
    handleOperatorClicked,
    handleEqualClicked,
    handleClearClicked,
    handleMemoryClicked,
    handleDecimalPointClicked
  } = useEventHandler();

  const clickHandler = (value: any) => {
    if (value >= "0" && value <= "9") {
      handleNumberClicked(value);
    } else {
      switch (value) {
        case "C":
          handleClearClicked();
          break;
        case "+":
        case "-":
        case "*":
        case "/":
          handleOperatorClicked(value);
          break;
        case "=":
          handleEqualClicked();
          break;
        case "M+":
        case "M-":
        case "MR":
        case "MC":
          handleMemoryClicked(value);
          break;
        case ".":
          handleDecimalPointClicked();
          break;
        default:
          return;
      }
    }
  };

  return clickHandler;
};
