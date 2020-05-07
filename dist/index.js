"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const React = require("react");
const ReactDOM = require("react-dom");
require("./index.css");
const App_1 = require("./App");
const serviceWorker = require("./serviceWorker");
ReactDOM.render(React.createElement(React.StrictMode, null,
    React.createElement(App_1.default, null)), document.getElementById('root'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
//# sourceMappingURL=index.js.map