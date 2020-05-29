import App from "./App";
import React from "react";
import renderer from "react-test-renderer";
import {shallow} from "component-test-utils-react";
import {render} from "@testing-library/react";
import Enzyme, {mount} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

// React test render
describe("App - react-test-render - Reafactoring Tests", () => {
  it("should look the same", () => {
    const tree = renderer.create(<App />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});


// Enzyme
describe("App - enzyme - Reafactoring Tests", () => {
  it("should look the same", () => {
    const component = mount(<App />);
    expect(component.html()).toMatchSnapshot();
  });
});

// component-test-utils-react
describe("App - component-test-utils-react - Reafactoring Tests", () => {
  it("should look the same", () => {
    const component = shallow(<App />, {blackList: true});
    expect(component.html({snapshot: true})).toMatchSnapshot();
  });
});

// @testing-library
describe("App - @testing-library/react - Reafactoring Tests", () => {
  it("should look the same", () => {
    const {container} = render(<App />);
    expect(container.firstChild).toMatchSnapshot();
  });
});
