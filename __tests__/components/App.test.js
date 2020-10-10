import React from "react";
import App from "../../src/components/App";
import { mount, shallow } from "../../src/enzyme";

describe("App component", () => {
  it("should mount and match snapshot", () => {
    const component = mount(<App />);
    expect(component).toMatchSnapshot();
  });

  it("should start with light theme", function () {
    const wrapper = shallow(<App />);
    expect(wrapper.state("theme")).toBe("light");
  });

  it("should toggle between dark and light theme when changeTheme() is called", function () {
    const wrapper = shallow(<App />);
    wrapper.instance().changeTheme();
    expect(wrapper.state("theme")).toBe("dark");
    wrapper.instance().changeTheme();
    expect(wrapper.state("theme")).toBe("light");
  });
});
