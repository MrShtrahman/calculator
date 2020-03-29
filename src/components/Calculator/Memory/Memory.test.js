import Memory from "./Memory";
import React from "react";
import expect from "expect";
import { mountWithRedux } from "../../../redux/testUtils";

describe("<Memory /> component", () => {
  it("renders", () => {
    const mockIsMemoShown = false;
    const wrapper = mountWithRedux(<Memory isMemoShown={mockIsMemoShown} />);

    expect(wrapper).toMatchSnapshot();
  });
});
