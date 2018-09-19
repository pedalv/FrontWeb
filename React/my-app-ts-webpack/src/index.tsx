import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Hello from './components/Hello/Hello';
import Kunde from './components/Kunde/Kunde';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

declare let module: any

ReactDOM.render(
    <Kunde />, 
    document.getElementById("kunde") as HTMLElement
);

ReactDOM.render(
    <Hello compiler="Typescript" framework="React..." bundler="Webpack" />,
    document.getElementById('root') as HTMLElement
);

if (module.hot) {
   module.hot.accept();
}

registerServiceWorker();
