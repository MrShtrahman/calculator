import { memo } from './actionTypes';

export const addToMemo = payload => {
    return {
        type: memo.ADD_TO_MEMO,
        payload: payload
    }
}
export const subFromMemo = payload => {
    return {
        type: memo.SUB_FROM_MEMO,
        payload: payload
    }
}
export const resetMemo = payload => {
    return {
        type: memo.RESET_MEMO,
        payload: payload
    }
}