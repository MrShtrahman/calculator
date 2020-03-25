import React from "react";
import Result from "./Result";
import { mountWithRedux } from "../../../redux/testUtils";

describe("<Result /> component", () => {
  it("renders", () => {
    const wrapper = mountWithRedux(<Result />);

    expect(wrapper).toMatchSnapshot();
  });
});
