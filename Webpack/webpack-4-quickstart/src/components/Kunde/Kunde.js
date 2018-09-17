import React, { Component } from 'react';
import ReactDOM from "react-dom";
import './Kunde.css';

class Kunde extends Component {
  render() {
    return (
      <div className="Kunde">
        <p>Apotek1 here!</p>
      </div>
    );
  }
}

export default Kunde;
ReactDOM.render(<Kunde />, document.getElementById("kunde"));
