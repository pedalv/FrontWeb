import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Kunde from './Kunde';

it('renders kunde without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Kunde />, div);
  ReactDOM.unmountComponentAtNode(div);
});
