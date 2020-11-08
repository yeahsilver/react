// import { render, screen } from '@testing-library/react';
import React from "react";
import App from './App';
import { shallow } from "enzyme";
import { Footer } from './Footer';



it("render App", ()=>{
  const wrapper = shallow(<App />);
  const footer = wrapper.find(Footer);

  expect(footer.exists()).toBe(true);
});

// test('renders learn react link', () => {
//   render(<App />);
//   const linkElement = screen.getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });


