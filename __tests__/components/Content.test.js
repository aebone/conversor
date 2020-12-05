import React from "react";
import UnitConverter from "../../src/Pages/UnitConverter/UnitConverter";
import { shallow } from "../../src/enzyme";

describe("UnitConverter component", () => {
  it("should change unit Value state", () => {
    const wrapper = shallow(<UnitConverter />);
    const value = wrapper.find("#value-length");
    const newEventValue = { target: { value: 123 } };
    value.simulate("change", newEventValue);
    expect(wrapper.state("length")).toStrictEqual({
      from: "mi",
      to: "km",
      value: 123,
    });
  });

  it("should change unit From state", () => {
    const wrapper = shallow(<UnitConverter />);
    const from = wrapper.find("#from-length");
    const newEventValue = { target: { value: "in" } };
    from.simulate("change", newEventValue);
    expect(wrapper.state("length")).toStrictEqual({
      from: "in",
      to: "km",
      value: 1,
    });
  });

  it("should change unit To state", () => {
    const wrapper = shallow(<UnitConverter />);
    const from = wrapper.find("#to-length");
    const newEventValue = { target: { value: "cm" } };
    from.simulate("change", newEventValue);
    expect(wrapper.state("length")).toStrictEqual({
      from: "mi",
      to: "cm",
      value: 1,
    });
  });
});
