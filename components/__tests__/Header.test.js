import React from "react";
import { shallow } from "enzyme";
import toJSON from "enzyme-to-json";

import Header from "../Header";

describe("Header", () => {
  const setup = propOverrides => {
    const props = {
      title: "Web Title",
      ...propOverrides
    };

    const wrapper = shallow(<Header {...props} />);

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
