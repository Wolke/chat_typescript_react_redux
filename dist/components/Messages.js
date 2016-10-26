"use strict";
const React = require('react');
class Message extends React.Component {
    render() {
        return (React.createElement("div", null, 
            "This is:", 
            this.props.msg));
    }
}
class Messages extends React.Component {
    render() {
        return (React.createElement("div", null, (() => {
            this.props.messgaes.map((msg) => {
                console.log(msg);
                return (React.createElement("div", null, 
                    React.createElement("h1", null, "messages"), 
                    React.createElement(Message, {msg: msg})));
            });
        })()));
    }
}
exports.Messages = Messages;
//# sourceMappingURL=Messages.js.map