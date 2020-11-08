import React from "react";
import { shallow } from "enzyme";
import { Footer } from './Footer';

it('should render team name', ()=>{
    const wrapper = shallow(<Footer />);
    const span = wrapper.find('span');
    const result = span.text();

    expect(result).toBe('PINGus');
});