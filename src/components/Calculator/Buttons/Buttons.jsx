import './Buttons.css';

import React, { useEffect, useState } from 'react';
import { addToMemo, resetMemo, subFromMemo } from '../../../redux/actions/memo';
import { clear, setDisplay, setLeft, setOperator, setRight } from '../../../redux/actions/calculatorBasic.js';
import { useDispatch, useSelector } from 'react-redux';

import CalcButton from './CalcButton/CalcButton';

const values = [
    ['M+', 'M-', 'MR', 'MC'],
    [7, 8, 9, '+'],
    [4, 5, 6, '-'],
    [1, 2, 3, '*'],
    ['C', 0, '=', '/']
]
const Buttons = () => {
    const [isLeft, setIsLeft] = useState(true);
    const [wasOperatorClicked, setWasOperatorClicked] = useState(false);
    const [wasEqualClicked, setWasEqualClicked] = useState(false);

    const dispatch = useDispatch();
    const calculatorData = useSelector(state => state.calculatorReducer);
    const memo = useSelector(state => state.memoReducer.memo)

    const handleNumberClicked = value => {
        if(value === 0 && (calculatorData.display === '0' || wasOperatorClicked)) {
            isLeft ? dispatch(setLeft(0)) : dispatch(setRight(0))
        } 
        else {
            if(wasOperatorClicked) {
                isLeft ? dispatch(setLeft(value)) : dispatch(setRight(value))
                setWasOperatorClicked(false)
                setIsLeft(false)
            } else {
                const curr = Number(calculatorData.display + value +'');
                isLeft ? 
                dispatch(setLeft(curr)) : 
                dispatch(setRight(curr))
            }
        }
    }

    const handleClearClicked = () => {
        setIsLeft(true)
        setWasOperatorClicked(false)
        setWasEqualClicked(false)
        dispatch(clear())
    }

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

    
    const handleOperatorClicked = value => {
        dispatch(setOperator(value))
        setWasOperatorClicked(true)
        setIsLeft(false)
        if(calculatorData.operator !== null) {
            if(wasEqualClicked) {
                setWasEqualClicked(false)
                dispatch(setRight(0))
                /* This is the only case in which the display doesn't 
                   change along with calculatorData.right */
                dispatch(setDisplay(calculatorData.left))
            } else {
                dispatch(setLeft(
                    calculateResult(calculatorData.left, calculatorData.right)))
            }
        }
    }

    const handleEqualClicked = () => {
        setWasEqualClicked(true)
        dispatch(setLeft(calculateResult(calculatorData.left, calculatorData.right)))
    }

    const clickHandler = value => {
        if(!isNaN(value)) {
            handleNumberClicked(value)
        } else {
            switch(value) {
                case 'C':
                    handleClearClicked()
                    break
                case '+':
                case '-':
                case '*':
                case '/':
                    handleOperatorClicked(value)
                    break
                case '=':
                    handleEqualClicked()
                    break
                case 'M+':
                    dispatch(addToMemo(Number(calculatorData.display)))
                    break
                case 'M-':
                    dispatch(subFromMemo(Number(calculatorData.display)))
                    break
                case 'MR':
                    isLeft ? 
                        dispatch(setLeft(memo)) : dispatch(setRight(memo))
                    break
                case 'MC':
                    dispatch(resetMemo())
                    break
                default: return
            }
        }
    }

    const handleKeyPress = event => {
        switch(event.key) {
            case 'Enter':
                handleEqualClicked()
                break
            case 'Escape':
            case 'c':
            case 'C':
            case 'Backspace':
                handleClearClicked()
                break
            case '+':
            case '-':
            case '*':
            case '/':
                handleOperatorClicked(event.key)
                break
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                handleNumberClicked(parseInt(event.key))
                break;
            default: return
        }
    }

    useEffect(() => {
        window.addEventListener('keydown', handleKeyPress);
        return () => {
          window.removeEventListener('keydown', handleKeyPress);
        };
      });
    
    return (
        values.map((row, index) => 
            <div className = 'buttonsRow' key = {index}>
                {row.map(value => 
                    <CalcButton key = {value} value = {value} 
                    clicked = {() => clickHandler(value)}/>)}
            </div>)
    )
}

export default Buttons