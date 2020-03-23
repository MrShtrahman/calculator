import { combineReducers, createStore } from 'redux';
import { configure, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Buttons from './Buttons';
import { Provider } from 'react-redux';
import React from 'react';
import calculatorBasicReducer 
    from '../../../redux/reducers/calculatorBasic/calculatorBasicReducer';
import calculatorMetadataReducer 
    from '../../../redux/reducers/calculatorMetadata/calculatorMetadataReducer';
import expect from 'expect'
import memoReducer from '../../../redux/reducers/memo/memoReducer';

configure({
    adapter: new Adapter()
})

describe('<Buttons /> component', () => {
    const reducer = combineReducers({
        calculatorBasicReducer,
        calculatorMetadataReducer,
        memoReducer
    })
    const mockStore = createStore(reducer, {
        memoReducer: {},
        calculatorBasicReducer: {},
        calculatorMetadataReducer: {}
    })

    it('renders', () => {
        const wrapper = mount(
            <Provider store = {mockStore}>
                <Buttons />
            </Provider>
        );
        
        expect(wrapper).toMatchSnapshot()
    })
})