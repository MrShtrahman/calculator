import { calculatorBasic } from '../../actions/actionTypes';

const initialState = {
    display: '0',
    left: 0,
    right: 0,
    operator: null
}

const calculatorReducer = (state = initialState, action) => {
    switch(action.type) {
        case calculatorBasic.SET_DISPLAY :
            return {
                ...state,
                display: action.payload
            }
        case calculatorBasic.SET_LEFT :
            return {
                ...state,
                left: action.payload,
                display: action.payload + ''
            }
        case calculatorBasic.SET_RIGHT :
            return {
                ...state,
                right: action.payload,
                display: action.payload + ''
            }
        case calculatorBasic.SET_OPERATOR: 
            return {
                ...state,
                operator: action.payload
            }
        case calculatorBasic.CLEAR: 
            return {
                ...state,
                display: '0',
                operator: null,
                left: 0,
                right: 0
            }
        default:
            return state
    }
}

export default calculatorReducer;