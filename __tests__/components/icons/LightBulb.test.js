import React from "react";
import { shallow } from "../../../src/enzyme";
import LightBulb from "../../../src/Application/icons/LightBulb";

describe("LightBulb component", () => {
  it("should return default width if none is passed", () => {
    const defaultWidth = 50;
    const wrapper = shallow(<LightBulb />);
    expect(wrapper.props().width).toBe(defaultWidth);
  });

  it("should return custom passed width", () => {
    const customWidth = 100;
    const wrapper = shallow(<LightBulb width={customWidth} />);
    expect(wrapper.props().width).toBe(customWidth);
  });
});
