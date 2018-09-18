import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/Welcome/App';
import Calendar from './components/Date/Calendar';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<Calendar />, document.getElementById('calendar'));
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
