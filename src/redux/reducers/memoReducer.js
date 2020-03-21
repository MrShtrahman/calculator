import { memo } from '../actions/actionTypes';

const initialState = {
    memo: 0,
    isMemoIndication: false
}

const memoReducer = (state = initialState, action) => {
    switch(action.type) {
        case memo.ADD_TO_MEMO: 
            return {
                memo: state.memo + action.payload,
                isMemoIndication: true
            }
        case memo.SUB_FROM_MEMO: 
            return {
                memo: state.memo - action.payload,
                isMemoIndication: true
            }
        case memo.RESET_MEMO: 
            return {
                memo: 0,
                isMemoIndication: false
            }
        default: return state
    }
}

export default memoReducer