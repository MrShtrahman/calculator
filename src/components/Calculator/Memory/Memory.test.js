import Memory from "./Memory";
import React from "react";
import { mountWithRedux } from "../../../redux/testUtils";

describe("<Memory /> component", () => {
  it("renders", () => {
    const wrapper = mountWithRedux(<Memory />);

    expect(wrapper).toMatchSnapshot();
  });
});
