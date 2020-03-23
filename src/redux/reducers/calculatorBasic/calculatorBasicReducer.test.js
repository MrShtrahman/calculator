import * as actions from '../../actions/calculatorBasic';

import expect from 'expect';
import reducer from './calculatorBasicReducer';

const initialState = {
    display: '0',
    left: 0,
    right: 0,
    operator: null
}

describe('calculatorBasic reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('handles left setting request', () => {
        expect(reducer(initialState, actions.setLeft(5))).toEqual({
            ...initialState,
            left: 5,
            display: '5'
        })
    })

    it('handles right setting request', () => {
        expect(reducer(initialState, actions.setRight(17))).toEqual({
            ...initialState,
            right: 17,
            display: '17'
        })
    })

    it('handles display setting request', () => {
        expect(reducer(initialState, actions.setDisplay('6'))).toEqual({
            ...initialState,
            display: '6'
        })
    })

    it('handles operator setting request', () => {
        expect(reducer(initialState, actions.setOperator('*'))).toEqual({
            ...initialState,
            operator: '*'
        })
    })

    it('handles clear request', () => {
        expect(reducer({...initialState, left: 5, right: 6}, 
            actions.clear())).toEqual(initialState)
    })
})