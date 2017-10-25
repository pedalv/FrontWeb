"use strict";
/*
import * as React from "react";
import * as ReactDOM from "react-dom";

import { Hello } from "./Hello";

ReactDOM.render(
    <Hello compiler="TypeScript" framework="React" />,
    document.getElementById("example")
);
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var react_1 = require("react");
var react_dom_1 = require("react-dom");
//= root
var Hello = /** @class */ (function (_super) {
    __extends(Hello, _super);
    function Hello() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Hello.prototype.render = function () {
        var element1 = react_1["default"].createElement('h1', { className: 'greeting' }, 'Hello, world!');
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
        return (react_1["default"].createElement("div", { className: "separator-bottom" },
            react_1["default"].createElement("h1", null, "Hello :), world!"),
            element1));
    };
    return Hello;
}(react_1["default"].Component));
// ========================================
react_dom_1["default"].render(react_1["default"].createElement(Hello, null), document.getElementById('root'));
