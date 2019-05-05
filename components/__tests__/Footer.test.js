import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Footer from "../Footer";

describe("Footer", () => {
  const setup = propOverrides => {
    const props = {
      ...propOverrides
    };

    const wrapper = shallow(<Footer {...props} />);

    return {
      props,
      wrapper
    };
  };

  it("should renders default", () => {
    const { wrapper } = setup();

    expect(toJSON(wrapper)).toMatchSnapshot();
  });
});
