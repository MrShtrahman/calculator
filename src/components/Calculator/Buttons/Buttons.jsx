import './Buttons.css';

import React, { useEffect, useState } from 'react';
import { clear, setDisplay, setOperator } from '../../../redux/actions/calculatorActions.js';
import { useDispatch, useSelector } from 'react-redux';

import CalcButton from './CalcButton/CalcButton';

const values = [
    [7, 8, 9, '+'],
    [4, 5, 6, '-'],
    [1, 2, 3, '*'],
    ['C', 0, '=', '/']
]
const Buttons = () => {    
    const [left, setLeft] = useState(0);
    const [right, setRight] = useState(0);
    const [isLeft, setIsLeft] = useState(true);
    const [wasOperatorClicked, setWasOperatorClicked] = useState(false);
    const [wasEqualClicked, setWasEqualClicked] = useState(false);

    const dispatch = useDispatch();
    const calculatorData = useSelector(state => state.calculatorReducer);

    const handleNumberClicked = value => {
        if(value === 0 && calculatorData.display === '') {
            dispatch(setDisplay('0.'))
            isLeft ? setLeft(0.) : setRight(0.)
        } else {
            if(wasOperatorClicked) {
                dispatch(setDisplay(value + ''))
                isLeft ? setLeft(value) : setRight(value)
                setWasOperatorClicked(false)
                setIsLeft(false)
            } else {
                dispatch(setDisplay(calculatorData.display + value + '')) 
                isLeft ? setLeft(Number(calculatorData.display + value +'')) : 
                    setRight(Number(calculatorData.display + value +''))
            }
        }
    }

    const handleClearClicked = () => {
        setRight(0)
        setLeft(0)
        setIsLeft(true)
        setWasOperatorClicked(false)
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
                if(right !== 0) {
                    return left / right;
                } else {
                    dispatch(setDisplay("Can't divide by 0."))    
                    setTimeout(() => dispatch(clear()), 750)
                    return null
                }
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
                setRight(0)
            } else {
                setLeft(calculateResult(left, right))
                dispatch(setDisplay(calculateResult(left, right)))
            }
        }
    }

    const handleEqualClicked = () => {
        setWasEqualClicked(true)
        const result = calculateResult(left, right);
        setLeft(result)
        dispatch(setDisplay(result))
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