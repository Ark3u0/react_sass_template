import React from 'react';
import World from '../../../src/jsx/components/world.jsx';
import { shallow } from 'enzyme';


describe("World", () => {
  it("renders world", () => {
    const wrapper = shallow(<World/>);
    expect(wrapper.html()).toEqual('<span>World!</span>');
  });
});