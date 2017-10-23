import React from 'react';
import ReactDOM from 'react-dom';

 //= root3

 function tick() {
  const element = (
    <div className="separator-bottom">
      <h1>Hellooooooooooooooo!</h1>
      <h2>It is {new Date().toLocaleTimeString()}.</h2>
    </div>
  );
  ReactDOM.render(
    element,
    document.getElementById('root3')
  );
}

// it’s important to cancel your interval when you don’t need it anymore to save memory.
//  It is possible stop time when extends from React.Component as show in 05-stateandlifecycle.js
setInterval(tick, 1000);


//= root2

function Welcome(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return (
    <div className="separator-bottom">
      <Welcome name="Sara" />
      <Welcome name="Cahal" />
      <Welcome name="Edite" />
    </div>
  );
}


 // ========================================

 ReactDOM.render(
  <App />,
  document.getElementById('root2')
);

 //= root3
