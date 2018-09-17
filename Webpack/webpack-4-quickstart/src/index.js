//import App from "./App";
import App from "./components/App/App";
import Kunde from "./components/Kunde/Kunde";
import AppDate from "./components/AppDate/AppDate";
import AppReact from "./components/AppReact/AppReact";
import style from "./main.css";
import registerServiceWorker from './registerServiceWorker';

if (process.env.NODE_ENV !== 'production') {
	console.log('Looks like we are in development mode!');
}

registerServiceWorker();
