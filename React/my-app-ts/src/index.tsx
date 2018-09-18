import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/App';
import Kunde from './components/Kunde/Kunde';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <Kunde />, 
    document.getElementById("kunde") as HTMLElement
);

ReactDOM.render(
    <App />, 
    document.getElementById('root') as HTMLElement
  );

registerServiceWorker();
