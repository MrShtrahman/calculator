import * as actionTypes from './actionTypes';
import * as calcBasic from './calculatorBasic';
import * as calcMetadata from './calculatorMetadata';
import * as memo from './memo';

import expect from 'expect';

describe('Testing all Redux actions', () => {

    describe('calcBasic actions', () => {
        it('should create an action to set the display', () => {
            const payload = '5';
            const expectedAction = {
                type: actionTypes.calculatorBasic.SET_DISPLAY,
                payload: '5'
            }

        expect(calcBasic.setDisplay(payload)).toEqual(expectedAction)
        })

        it('should create an action to set the operator', () => {
            const payload = '-';
            const expectedAction = {
                type: actionTypes.calculatorBasic.SET_OPERATOR,
                payload: '-'
            }

        expect(calcBasic.setOperator(payload)).toEqual(expectedAction)
        })

        it('should create an action to set left', () => {
            const payload = 3;
            const expectedAction = {
                type: actionTypes.calculatorBasic.SET_LEFT,
                payload: 3
            }

        expect(calcBasic.setLeft(payload)).toEqual(expectedAction)
        })

        it('should create an action to set right', () => {
            const payload = 4;
            const expectedAction = {
                type: actionTypes.calculatorBasic.SET_RIGHT,
                payload: 4
            }

        expect(calcBasic.setRight(payload)).toEqual(expectedAction)
        })

        it('should create an action to clear all', () => {
            const expectedAction = {
                type: actionTypes.calculatorBasic.CLEAR
            }
        expect(calcBasic.clear()).toEqual(expectedAction)
        })
    })

    describe('calcMetadata actions', () => {
        it('should create an aciton to set isLeft', () => {
            const payload = false;
            const expectedAction = {
                type: actionTypes.calculatorMetadata.SET_IS_LEFT,
                payload: false
            }

            expect(calcMetadata.setIsLeft(payload)).toEqual(expectedAction)
        })

        it('should create an aciton to set operatorClicked', () => {
            const payload = true;
            const expectedAction = {
                type: actionTypes.calculatorMetadata.SET_OPERATOR_CLICKED,
                payload: true
            }

            expect(calcMetadata.setOperatorClicked(payload)).toEqual(expectedAction)
        })

        it('should create an aciton to set equalClicked', () => {
            const payload = true;
            const expectedAction = {
                type: actionTypes.calculatorMetadata.SET_EQUAL_CLICKED,
                payload: true
            }
            expect(calcMetadata.setEqualClicked(payload)).toEqual(expectedAction)
        })
    })

    describe('memo actions', () => {
        it('should create an aciton to add to memo', () => {
            const payload = 5;
            const expectedAction = {
                type: actionTypes.memo.ADD_TO_MEMO,
                payload: 5
            }
            
            expect(memo.addToMemo(payload)).toEqual(expectedAction)
        })
        
        it('should create an aciton to sub from memo', () => {
            const payload = 6;
            const expectedAction = {
                type: actionTypes.memo.SUB_FROM_MEMO,
                payload: 6
            }
            
            expect(memo.subFromMemo(payload)).toEqual(expectedAction)
        })
        
        it('should create an aciton to reset memo', () => {
            const expectedAction = {
                type: actionTypes.memo.RESET_MEMO
            }
            expect(memo.resetMemo()).toEqual(expectedAction)
        })
    })
})