import React from 'react';
import './index.css';
import App from './components/Welcome/App';
import Calendar from './components/Date/Calendar';
import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

registerServiceWorker();
