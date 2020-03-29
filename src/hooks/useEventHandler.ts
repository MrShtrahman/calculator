import { addToMemo, resetMemo, subFromMemo } from "../redux/actions/memo";
import { batch, useDispatch } from "react-redux";
import {
  clear,
  setDisplay,
  setLeft,
  setOperator,
  setRight
} from "../redux/actions/calculatorBasic";
import {
  setEqualClicked,
  setIsLeft,
  setOperatorClicked
} from "../redux/actions/calculatorMetadata";

import { useSelector } from "../redux/useSelector";

export const useEventHandler = () => {
  const dispatch = useDispatch();
  const calculatorData = useSelector(state => state.calcBasic);
  const memo = useSelector(state => state.memo.memo);
  const metadata = useSelector(state => state.calcMetadata);

  //#region utils
  const setRelevantOperandTo = (value: number) =>
    metadata.isLeft ? dispatch(setLeft(value)) : dispatch(setRight(value));

  const calculateResult = (left: number, right: number): number => {
    switch (calculatorData.operator) {
      case "+":
        return left + right;
      case "-":
        return left - right;
      case "*":
        return left * right;
      case "/":
        return right !== 0 ? left / right : Infinity;
      default:
        return 0;
    }
  };
  //#endregion

  //#region specificClickHandlers
  const handleNumberClicked = (value: number) => {
    if (metadata.operatorClicked) {
      setRelevantOperandTo(value);
      batch(() => {
        dispatch(setOperatorClicked(false));
        dispatch(setIsLeft(false));
      });
    } else {
      setRelevantOperandTo(Number(calculatorData.display + value + ""));
    }
  };

  const handleClearClicked = () =>
    batch(() => {
      dispatch(setIsLeft(true));
      dispatch(setOperatorClicked(false));
      dispatch(setEqualClicked(false));
      dispatch(clear(""));
    });

  const handleOperatorClicked = (value: string) => {
    batch(() => {
      dispatch(setOperator(value));
      dispatch(setOperatorClicked(true));
      dispatch(setIsLeft(false));
    });
    if (calculatorData.operator !== "") {
      if (metadata.equalClicked) {
        batch(() => {
          dispatch(setEqualClicked(false));
          dispatch(setRight(0));
          /* This is the only case in which calculatorData.display doesn't 
                    change along with calculatorData.right */
          dispatch(setDisplay(calculatorData.left));
        });
      } else {
        dispatch(
          setLeft(calculateResult(calculatorData.left, calculatorData.right))
        );
      }
    }
  };

  const handleEqualClicked = () =>
    batch(() => {
      dispatch(setEqualClicked(true));
      dispatch(
        setLeft(calculateResult(calculatorData.left, calculatorData.right))
      );
    });

  const handleMemoryClicked = (value: string) => {
    switch (value) {
      case "M+":
        dispatch(addToMemo(Number(calculatorData.display)));
        break;
      case "M-":
        dispatch(subFromMemo(Number(calculatorData.display)));
        break;
      case "MR":
        setRelevantOperandTo(memo);
        break;
      case "MC":
        dispatch(resetMemo());
        break;
      default:
        return;
    }
  };
  //#endregion

  return {
    handleNumberClicked,
    handleOperatorClicked,
    handleEqualClicked,
    handleClearClicked,
    handleMemoryClicked
  };
};
