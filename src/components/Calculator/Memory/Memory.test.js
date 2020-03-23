import { configure, mount } from 'enzyme';

import Adapter from 'enzyme-adapter-react-16';
import Memory from './Memory';
import { Provider } from 'react-redux';
import React from 'react';
import { createStore } from 'redux';
import expect from 'expect'
import reducer from '../../../redux/reducers/memo/memoReducer';

configure({
    adapter: new Adapter()
})

describe('<Memory /> component', () => {
    const mockStore = createStore(reducer, {
        memoReducer: {}
    })

    it('renders', () => {
        const wrapper = mount(
            <Provider store = {mockStore}>
                <Memory />
            </Provider>
        );
        
        expect(wrapper).toMatchSnapshot()
    })
})