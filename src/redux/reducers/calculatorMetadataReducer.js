import { calculatorMetadata } from '../actions/actionTypes'

const initialState = {
    isLeft: true,
    equalClicked: false,
    operatorClicked: false
}

const calculatorMetadataReducer = (state = initialState, action) => {
    switch(action.type) {
        case calculatorMetadata.SET_EQUAL_CLICKED:
            return {
                ...state,
                equalClicked: action.payload
            }
        case calculatorMetadata.SET_OPERATOR_CLICKED:
            return {
                ...state,
                operatorClicked: action.payload
            }
        case calculatorMetadata.SET_IS_LEFT:
            return {
                ...state,
                isLeft: action.payload
            }
        default: return state
    }
}

export default calculatorMetadataReducer