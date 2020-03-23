import { configure, mount } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import { Provider } from "react-redux";
import React from "react";
import Result from "./Result";
import { createStore } from "redux";
import expect from "expect";
import reducer from "../../../redux/reducers/calculatorBasic/calculatorBasicReducer";

configure({
  adapter: new Adapter()
});

describe("<Memory /> component", () => {
  const mockStore = createStore(reducer, {
    calculatorBasicReducer: {}
  });

  it("renders", () => {
    const wrapper = mount(
      <Provider store={mockStore}>
        <Result />
      </Provider>
    );

    expect(wrapper).toMatchSnapshot();
  });
});
