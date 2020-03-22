import { addToMemo, resetMemo, subFromMemo } from '../redux/actions/memo';
import { batch, useDispatch, useSelector } from 'react-redux'
import { clear, setDisplay, setLeft, setOperator, setRight } from '../redux/actions/calculatorBasic';
import { setEqualClicked, setIsLeft, setOperatorClicked } from '../redux/actions/calculatorMetadata';

export const useEventHandler = () => {
    const dispatch = useDispatch();
    const calculatorData = useSelector(state => state.calculatorBasicReducer);
    const memo = useSelector(state => state.memoReducer.memo);
    const metadata = useSelector(state => state.calculatorMetadataReducer);
    
    //#region utils
    const setRelevantOperandTo = value => 
        metadata.isLeft ? dispatch(setLeft(value)) : dispatch(setRight(value))

    const calculateResult = (left, right) => {
        switch(calculatorData.operator) {
            case '+':
                return left + right;
            case '-':
                return left - right;
            case '*':
                return left * right;
            case '/': 
                return right !== 0 ? left / right : Infinity
            default: return
        }
    }
    //#endregion

    //#region specificClickHandlers
    const handleNumberClicked = value => {
        if(value === 0 && 
            (calculatorData.display === '0' || metadata.operatorClicked)) {
            setRelevantOperandTo(0)
        } else {
            if(metadata.operatorClicked) {
                batch(() => {
                    dispatch(setRelevantOperandTo(value))
                    dispatch(setOperatorClicked(false))
                    dispatch(setIsLeft(false))
                })
            } else {
                setRelevantOperandTo(Number(calculatorData.display + value +''))
            }
        }
    }

    const handleClearClicked = () => 
        batch(() => {
            dispatch(setIsLeft(true))
            dispatch(setOperatorClicked(false))
            dispatch(setEqualClicked(false))
            dispatch(clear())
        })

    const handleOperatorClicked = value => {
        batch(() => {
            dispatch(setOperator(value))
            dispatch(setOperatorClicked(true))
            dispatch(setIsLeft(false))
        })
        if(calculatorData.operator !== null) {
            if(metadata.equalClicked) {
                batch(() => {
                    dispatch(setEqualClicked(false))
                    dispatch(setRight(0))
                    /* This is the only case in which calculatorData.display doesn't 
                    change along with calculatorData.right */
                    dispatch(setDisplay(calculatorData.left))
                })
            } else {
                dispatch(setLeft(
                    calculateResult(calculatorData.left, calculatorData.right)))
            }
        }
    }

    const handleEqualClicked = () => {
        batch(() => {
            dispatch(setEqualClicked(true))
            dispatch(setLeft(calculateResult(calculatorData.left, calculatorData.right)))
        })
    }

    const handleMemoryClicked = value => {
        switch(value) {
            case 'M+':
                dispatch(addToMemo(Number(calculatorData.display)))
                break
            case 'M-':
                dispatch(subFromMemo(Number(calculatorData.display)))
                break
            case 'MR':
                setRelevantOperandTo(memo)
                break
            case 'MC':
                dispatch(resetMemo())
                break
            default: return
        }
    }
    //#endregion

    return {handleNumberClicked, handleOperatorClicked, 
        handleEqualClicked, handleClearClicked, handleMemoryClicked}
}