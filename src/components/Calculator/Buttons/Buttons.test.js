import Buttons from "./Buttons";
import React from "react";
import { mountWithRedux } from "../../../redux/testUtils";

describe("<Buttons /> component", () => {
  it("renders", () => {
    const wrapper = mountWithRedux(<Buttons />);

    expect(wrapper).toMatchSnapshot();
  });
});
