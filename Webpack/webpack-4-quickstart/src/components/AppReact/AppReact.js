import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './AppReact.css';

class AppReact extends Component {
  render() {
    return (
      <div className="AppReact">
        <header className="AppReact-header">
          <img src={logo} className="AppReact-logo" alt="logo" />
          <h1 className="AppReact-title">Welcome to React</h1>
        </header>
        <p className="AppReact-intro">
          To get started, edit <code>src/AppReact.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default AppReact;
ReactDOM.render(<AppReact />, document.getElementById('react'));
