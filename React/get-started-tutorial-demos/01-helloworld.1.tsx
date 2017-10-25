/*
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
*/


import React from 'react';
import ReactDOM from 'react-dom';

 //= root
  
class Hello extends React.Component {
    render() {
    const element1 = React.createElement(
        'h1',
        {className: 'greeting'},
        'Hello, world!'
    );

    /*
    // Note: this structure is simplified
    const element2 = {
        type: 'h1',
        props: {
        className: 'greeting',
        children: 'Hello, world'
        }
    };
    */

    return (
        <div className="separator-bottom">
        <h1>Hello :), world!</h1>
        {element1}
        </div>
    );
    }
}

// ========================================

ReactDOM.render(
    <Hello />,
    document.getElementById('root')
    );



    //$ node_modules/typescript/bin/tsc --target es6 --jsx react 01-helloworld.1.tsx
