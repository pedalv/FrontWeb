import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Kunde from './Kunde';

import { configure, shallow } from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
configure({ 
    adapter: new Adapter() 
});

it('renders kunde without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Kunde />, div);
  ReactDOM.unmountComponentAtNode(div);
});

it('renders Apotek1 here! message', () => {
    const message = <h2>Apotek1 here!</h2>;
    const wrapper = shallow(<Kunde />); 
    expect(wrapper.contains(message)).toEqual(true);
    
    /*expect(wrapper).toContainReact(message);*/
    /*https://jestjs.io/docs/en/expect.html*/
});

it('sums numbers', () => {
    expect(1+2).toEqual(3);
});
