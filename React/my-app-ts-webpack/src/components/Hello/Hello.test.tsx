import { shallow } from 'enzyme';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './Hello';

import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new ReactSixteenAdapter() });

it('sums 1 + 2 numbers = 3 - Test', () => {
  expect(1+2).toEqual(3);
});

describe('HelloComponent - Test', () => {
    
    it('renders without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Hello compiler="Typescript" framework="React..." bundler="Webpack" />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders message', () => {
        const message = <h1>This is a React... application using Typescript with Webpack</h1>;
        const wrapper = shallow(<Hello compiler="Typescript" framework="React..." bundler="Webpack" />); 
        expect(wrapper.contains(message)).toEqual(true);
    });

  });
