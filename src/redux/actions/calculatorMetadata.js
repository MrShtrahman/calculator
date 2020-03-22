import { calculatorMetadata } from './actionTypes';

export const setIsLeft = payload => {
    return {
        type: calculatorMetadata.SET_IS_LEFT,
        payload: payload
    }
}
export const setEqualClicked = payload => {
    return {
        type: calculatorMetadata.SET_EQUAL_CLICKED,
        payload: payload
    }
}
export const setOperatorClicked = payload => {
    return {
        type: calculatorMetadata.SET_OPERATOR_CLICKED,
        payload: payload
    }
}