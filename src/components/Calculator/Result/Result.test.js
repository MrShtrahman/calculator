import React from "react";
import Result from "./Result";
import { mountWithRedux } from "../../../redux/testUtils";

describe("<Result /> component", () => {
  it("renders", () => {
    const mockDisplay = "1234";
    const wrapper = mountWithRedux(<Result display={mockDisplay} />);

    expect(wrapper).toMatchSnapshot();
  });
});
