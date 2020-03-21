import * as actionTypes from '../actions/actionTypes';

const initialState = {
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
        case actionTypes.CLEAR: 
            return {
                ...state,
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