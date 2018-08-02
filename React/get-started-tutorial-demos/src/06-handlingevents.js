import React from 'react';
import ReactDOM from 'react-dom';

/*
- For example, the HTML:
<button onclick="activateLasers()">
  Activate Lasers
</button>

- is slightly different in React:
<button onClick={activateLasers}>
  Activate Lasers
</button>
*/


/*
- HTML
<a href="#" onclick="console.log('The link was clicked.'); return false">
  Click me
</a>

- React
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked.');
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  );
}

*/

/*
this.x = 9;    // this refers to global "window" object here in the browser
var module = {
  x: 81,
  getX: function() { return this.x; }
};

module.getX(); // 81

var retrieveX = module.getX;
retrieveX();   
// returns 9 - The function gets invoked at the global scope

// Create a new function with 'this' bound to module
// New programmers might confuse the
// global var x with module's property x
var boundGetX = retrieveX.bind(module);
boundGetX(); // 81


- You have to be careful about the meaning of this in JSX callbacks. 
- In JavaScript, class methods are not bound by default. 
- If you forget to bind this.handleClick and pass it to onClick,
 this will be undefined when the function is actually called.
- This is not React-specific behavior; 
- it is a part of how functions work in JavaScript. 
- Generally, if you refer to a method without () after it, 
such as onClick={this.handleClick}, you should bind that method. // IMPORTANT IMPORTANT IMPORTANT

*/

/*
Passing Arguments to Event Handlers

<button onClick={(e) => this.deleteRow(id, e)}>Delete Row</button>
<button onClick={this.deleteRow.bind(this, id)}>Delete Row</button>

- The above two lines are equivalent, and use 
1. arrow functions and 
2. Function.prototype.bind respectively.
*/

 //= root7

 class Toggle extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
          isToggleOn: true
        };
  
      // This binding is necessary to make `this` work in the callback
      this.handleClick = this.handleClick.bind(this);
    }
  
    handleClick() {
      this.setState(prevState => ({
        isToggleOn: !prevState.isToggleOn
      }));
    }
  
    render() {
      return (
          <div>
              <button onClick={this.handleClick}>
                {this.state.isToggleOn ? 'ON' : 'OFF'}
              </button>
              <LoggingButton1 />
              <LoggingButton2 />
              <hr />
          </div>

      );
    }
  }

  class LoggingButton1 extends React.Component {
    // This syntax ensures `this` is bound within handleClick.
    // Warning: this is *experimental* syntax.
    handleClick = () => {
      console.log('LoggingButton1 - this is:', this);
    }
  
    render() {
      return (
        <button onClick={this.handleClick}>
          Click me on button 1
        </button>
      );
    }
  }

  class LoggingButton2 extends React.Component {
    handleClick() {
      console.log('LoggingButton2 - this is:', this);
    }
  
    render() {
      // This syntax ensures `this` is bound within handleClick
      return (
        <button onClick={(e) => this.handleClick(e)}>
          Click me on button 2
        </button>
      );
    }
  }
 

 // ========================================

  ReactDOM.render(
    <Toggle />,
    document.getElementById('root7')
  );
  