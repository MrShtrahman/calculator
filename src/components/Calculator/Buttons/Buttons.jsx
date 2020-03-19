import './Buttons.css';

import React, { useCallback, useEffect, useState } from 'react';
import { clear, setDisplay, setLeft, setOperator, setRight } from '../../../redux/actions/calculatorActions.js';
import { useDispatch, useSelector } from 'react-redux';

import CalcButton from './CalcButton/CalcButton';

const values = [
    [7, 8, 9, '+'],
    [4, 5, 6, '-'],
    [1, 2, 3, '*'],
    ['C', 0, '=', '/']
]
const Buttons = () => {    
    const [isLeft, setIsLeft] = useState(true);
    const [wasOperatorClicked, setWasOperatorClicked] = useState(false);

    const dispatch = useDispatch();
    const calculatorData = useSelector(state => state.calculatorReducer);

    const handleNumberClicked = value => {
        if(value === 0 && calculatorData.display === '') {
            dispatch(setDisplay('0.'))
            isLeft ? dispatch(setLeft(0.)) : dispatch(setRight(0.))
        } else {
            if(wasOperatorClicked) {
                dispatch(setDisplay(value + ''))
                isLeft ? dispatch(setLeft(value)) : dispatch(setRight(value))
                setWasOperatorClicked(false)
                setIsLeft(false)
            } else {
                dispatch(setDisplay(calculatorData.display + value + '')) 
                isLeft ? dispatch(setLeft(Number(calculatorData.display + value +''))) : 
                    dispatch(setRight(Number(calculatorData.display + value +'')))
            }
        }
    }

    const handleClearClicked = () => {
        setIsLeft(true)
        setWasOperatorClicked(false)
        dispatch(clear())
    }

    const handleOperatorClicked = value => {
        setIsLeft(false)
        setWasOperatorClicked(true)
        dispatch(setOperator(value))
    }

    const handleEqualClicked = () => {
        const left = calculatorData.left;
        const right = calculatorData.right;
        let result;
        switch(calculatorData.operator) {
            case '+':
                result = left + right;
                break
            case '-':
                result = left - right;
                break
            case '*':
                result = left * right;
                break
            case '/': 
                if(right !== 0) {
                    result = left / right;
                } else {
                    result = "Can't divide by 0."    
                    setTimeout(() => dispatch(clear()), 750)   
                }
                break
            default: return
        }
        dispatch(setDisplay(result))
        dispatch(setLeft(result))
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
        // Remove event listeners on cleanup
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