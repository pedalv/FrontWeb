import './index.css';
//import App from './components/App/App';
//import AppDate from './components/AppDate/AppDate';
import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

registerServiceWorker();
