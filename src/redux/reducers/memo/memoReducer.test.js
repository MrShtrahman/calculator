import * as actions from '../../actions/memo';

import expect from 'expect';
import { memoReducer as reducer } from './memoReducer';

const initialState = {
    memo: 0,
    isMemoShown: false
}

describe('memo reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle adding to memo request', () => {
        expect(reducer(initialState, actions.addToMemo(5))).toEqual({
            memo: 5,
            isMemoShown: true
        })
    })
    
    it('should handle subtracting from memo request', () => {
        expect(reducer(initialState, actions.subFromMemo(7))).toEqual({
            memo: -7,
            isMemoShown: true
        })
    })

    it('should handle reseting memo request', () => {
        expect(reducer(initialState, actions.resetMemo())).toEqual(initialState)
    })
})