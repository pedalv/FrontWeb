/**/
import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p>React here!</p>
      </div>
    );
  }
}

export default App;
ReactDOM.render(<App />, document.getElementById("app"));


/*
import React from "react";
import ReactDOM from "react-dom";
const App = () => {
  return (
    <div>
      <p>React here!</p>
    </div>
  );
};
export default App;
ReactDOM.render(<App />, document.getElementById("app"));
*/