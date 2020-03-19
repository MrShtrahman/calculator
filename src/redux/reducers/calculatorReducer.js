import * as actionTypes from '../actions/actionTypes';

const initialState = {
    left: 0,
    right: 0,
    display: '',
    memo: 0,
    operator: null
}

const calculatorReducer = (state = initialState, action) => {
    switch(action.type) {
        case actionTypes.SET_DISPLAY :
            return {
                ...state,
                display: action.payload
            }
        case actionTypes.SET_OPERATOR: 
            return {
                ...state,
                operator: action.payload
            }
        case actionTypes.SET_LEFT: 
            return {
                ...state,
                left: action.payload
            }
        case actionTypes.SET_RIGHT: 
            return {
                ...state,
                right: action.payload
            }
        case actionTypes.CLEAR: 
            return {
                ...state,
                left: 0,
                right: 0,
                display: '',
                operator: null
            }        
        case actionTypes.SET_MEMO:
            return {
                ...state, 
                memo: action.payload
            }
        case actionTypes.RESET_MEMO: 
            return {
                ...state,
                memo: 0
            }
        default:
            return state
    }
}

export default calculatorReducer;