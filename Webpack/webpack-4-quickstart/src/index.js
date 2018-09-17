//import App from "./App";
import App from "./components/App/App";
import style from "./main.css";
import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

registerServiceWorker();
