import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App/App';
import Hello from './components/Hello/Hello';
import Kunde from './components/Kunde/Kunde';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

declare let module: any

ReactDOM.render(
    <App />, 
    document.getElementById("app") as HTMLElement
);

ReactDOM.render(
    <Kunde />, 
    document.getElementById("kunde") as HTMLElement
);

ReactDOM.render(
    <Hello compiler="Typescript" framework="React..." bundler="Webpack" />,
    document.getElementById('hello') as HTMLElement
);

if (module.hot) {
   module.hot.accept();
}

registerServiceWorker();
