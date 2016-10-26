"use strict";
const React = require('react');
const ReactDom = require('react-dom');
const redux_1 = require('redux');
const react_redux_1 = require('react-redux');
const reducers = require('./reducers');
let store = redux_1.createStore(reducers.app);
const App_1 = require('./components/App');
// ReactDom.render(
//     <App />,
//     document.getElementById("example")
// )
ReactDom.render(React.createElement(react_redux_1.Provider, {store: store}, 
    React.createElement(App_1.App, null)
), document.getElementById("example"));
//# sourceMappingURL=index.js.map