import { configure, shallow } from "enzyme";

import Adapter from "enzyme-adapter-react-16";
import CalcButton from "./CalcButton";
import React from "react";

configure({
  adapter: new Adapter()
});

describe("<calcButton /> component", () => {
  const clicked = jest.fn();
  const value = 5;
  it("renders", () => {
    const wrapper = shallow(<CalcButton value={value} clicked={clicked} />);
    expect(wrapper).toMatchSnapshot();
  });
});
