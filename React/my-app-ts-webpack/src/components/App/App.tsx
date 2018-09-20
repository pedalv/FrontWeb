import * as React from 'react';
import './App.css';
import Logo from './logo.svg';

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <Logo width={150} height={150} />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/index.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
