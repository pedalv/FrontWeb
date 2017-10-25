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
        const element1 = React.createElement('h1', { className: 'greeting' }, 'Hello, world!');
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
        return (React.createElement("div", { className: "separator-bottom" },
            React.createElement("h1", null, "Hello :), world!"),
            element1));
    }
}
// ========================================
ReactDOM.render(React.createElement(Hello, null), document.getElementById('root'));
