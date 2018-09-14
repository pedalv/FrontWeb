import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import AppDate from './components/AppDate/AppDate';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<AppDate />, document.getElementById('root1'));

registerServiceWorker();
