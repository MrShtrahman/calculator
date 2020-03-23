import * as actions from '../../actions/calculatorMetadata';

import expect from 'expect';
import reducer from './calculatorMetadataReducer';

const initialState = {
    isLeft: true,
    equalClicked: false,
    operatorClicked: false
}

describe('calculatorMetadata reducer', () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {})).toEqual(initialState)
    })

    it('should handle isLeft setting request', () => {
        expect(reducer(initialState, actions.setIsLeft(false))).toEqual({
            ...initialState,
            isLeft: false
        })
    })

    it('should handle operatorClicked setting request', () => {
        expect(reducer(initialState, actions.setOperatorClicked(true))).toEqual({
            ...initialState,
            operatorClicked: true
        })
    })

    it('should handle equalClicked setting request', () => {
        expect(reducer(initialState, actions.setEqualClicked(true))).toEqual({
            ...initialState,
            equalClicked: true
        })
    })
})