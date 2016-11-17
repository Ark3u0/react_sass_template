import React from 'react';
import Hello from './../src/hello.jsx';
import { shallow } from 'enzyme';


describe("Hello", () => {
  it("renders hello", () => {
    const wrapper = shallow(<Hello/>);
    expect(wrapper.html()).toEqual('<span>Hello</span>');
  });
});