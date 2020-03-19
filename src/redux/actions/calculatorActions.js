import * as actionTypes from './actionTypes';

export const setMemo = memo => {
    return {
        type: actionTypes.SET_MEMO,
        payload: memo
    }
}

export const resetMemo = () => {
    return {
        type: actionTypes.RESET_MEMO
    }
}

export const setDisplay = payload => {
    return {
        type: actionTypes.SET_DISPLAY,
        payload: payload
    }
}
export const setLeft = payload => {
    return {
        type: actionTypes.SET_LEFT,
        payload: payload
    }
}
export const setRight = payload => {
    return {
        type: actionTypes.SET_RIGHT,
        payload: payload
    }
}
export const setOperator = payload => {
    return {
        type: actionTypes.SET_OPERATOR,
        payload: payload
    }
}

export const clear = () => {
    return {
        type: actionTypes.CLEAR
    }
}