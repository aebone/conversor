import React from "react";
import App from "../../src/components/App";
import { mount } from "../../src/enzyme";

test("App snapshot", () => {
  const component = mount(<App />);
  expect(component).toMatchSnapshot();
});
