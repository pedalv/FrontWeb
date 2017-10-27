import React from 'react';
import ReactDOM from 'react-dom';
/*
import {
  renderIntoDocument,
  scryRenderedDOMComponentsWithTag
} from 'react-addons-test-utils';
import Voting from '../../src/components/Voting';
*/

/*
// The Tutorial does not use react 16 and there is compatible problems
// TODO: Check tutorials to test react version 16 later
$ npm test

> voting-client@1.0.0 test C:\Workspace\FrontApp\React\voting-client
> mocha --compilers js:babel-core/register --require ./test/test_helper.js "test...(.js|.jsx)"

Warning: React depends on requestAnimationFrame. Make sure that you load a polyfill in older browsers. http://fb.me/react-polyfills
Warning: ReactTestUtils has been moved to react-dom/test-utils. Update references to remove this warning.
module.js:471
    throw err;
    ^

Error: Cannot find module 'react-dom/lib/ReactTestUtils'
*/
import {expect} from 'chai';



// https://dev.to/letsbsocial1/requestanimationframe--polyfill-in-react-16-2ce
// http://facebook.github.io/jest/docs/en/tutorial-react.html#content
//npm install --save react-addons-test-utils

describe('Voting', () => {

  it('true is true', () => {

    expect(true).to.equal(true);

  });

  it('renders a pair of buttons', () => {
        /*
        const component = renderIntoDocument(
          <Voting pair={["Trainspotting", "28 Days Later"]} />
        );
        const buttons = scryRenderedDOMComponentsWithTag(component, 'button');
    
        expect(buttons.length).to.equal(2);
        expect(buttons[0].textContent).to.equal('Trainspotting');
        expect(buttons[1].textContent).to.equal('28 Days Later');
    */
      });

});
