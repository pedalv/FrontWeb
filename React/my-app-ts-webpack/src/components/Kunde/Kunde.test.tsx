import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { shallow } from 'enzyme';
import Kunde from './Kunde';

import * as Enzyme from 'enzyme';
import ReactSixteenAdapter from 'enzyme-adapter-react-16';
Enzyme.configure({ adapter: new ReactSixteenAdapter() });

it('sums 1 + 2 numbers = 3 - Test', () => {
  expect(1+2).toEqual(3);
});

describe('kundeComponent - Test', () => {
    
    it('renders kunde without crashing', () => {
        const div = document.createElement('div');
        ReactDOM.render(<Kunde />, div);
        ReactDOM.unmountComponentAtNode(div);
    });

    it('renders Apotek1 here! message', () => {
        const message = <h2>Apotek1 here!</h2>;
        const wrapper = shallow(<Kunde />); 
        expect(wrapper.contains(message)).toEqual(true);
    });

  });
