import { useEventHandler } from "./useEventHandler";

export const useOnKeyPress = () => {
  const {
    handleNumberClicked,
    handleOperatorClicked,
    handleEqualClicked,
    handleClearClicked
  } = useEventHandler();

  const keyPressHandler = (value: any) => {
    switch (value) {
      case "Enter":
        handleEqualClicked();
        break;
      case "Escape":
      case "c":
      case "C":
      case "Backspace":
        handleClearClicked();
        break;
      case "+":
      case "-":
      case "*":
      case "/":
        handleOperatorClicked(value);
        break;
      case "0":
      case "1":
      case "2":
      case "3":
      case "4":
      case "5":
      case "6":
      case "7":
      case "8":
      case "9":
        handleNumberClicked(Number(value));
        break;
      default:
        return;
    }
  };

  return keyPressHandler;
};
