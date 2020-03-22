import { calculatorBasic } from './actionTypes';

export const setDisplay = payload => {
    return {
        type: calculatorBasic.SET_DISPLAY,
        payload: payload
    }
}
export const setOperator = payload => {
    return {
        type: calculatorBasic.SET_OPERATOR,
        payload: payload
    }
}
export const setLeft = payload => {
    return {
        type: calculatorBasic.SET_LEFT,
        payload: payload
    }
}
export const setRight = payload => {
    return {
        type: calculatorBasic.SET_RIGHT,
        payload: payload
    }
}
export const clear = () => {
    return {
        type: calculatorBasic.CLEAR
    }
}